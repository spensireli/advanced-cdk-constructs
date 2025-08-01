import { aws_controltower as controltower, Stack, aws_kms as kms, CfnTag, aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AwsAccount } from '../aws-account/aws-account';

/**
 * Represents an organizational unit within AWS Control Tower.
 *
 * Organizational units (OUs) are containers for AWS accounts that help organize
 * and manage accounts based on business needs, security requirements, or other criteria.
 */
export interface OrganizationalUnit {
  /** The name of the organizational unit */
  readonly name: string;
  /** Optional description of the organizational unit's purpose */
  readonly description?: string;
}

/**
 * Properties for configuring AWS Control Tower Landing Zone.
 *
 * This interface defines all the configuration options available for setting up
 * a Control Tower landing zone with centralized logging, security auditing,
 * and organizational structure management.
 */
export interface ControlTowerLandingZoneProps {
  /** The name of the Control Tower stack */
  readonly controlTowerStackName: string;
  /**
     * AWS regions where Control Tower governance will be applied.
     * @default - Uses the current stack's region
     */
  readonly governedRegions?: string[];
  /**
     * AWS account ID for the log archive account.
     * If not provided, a new account will be created using logArchiveAccountEmail.
     */
  readonly logArchiveAccountId?: string;
  /**
     * Email address for the log archive account.
     * Required when logArchiveAccountId is not provided.
     */
  readonly logArchiveAccountEmail?: string;
  /**
     * IAM role name for the log archive account.
     * @default - Uses Control Tower default role name
     */
  readonly logArchiveAccountRoleName?: string;
  /**
     * Number of days to retain logs in the centralized logging bucket.
     * @default - 60 days
     */
  readonly logRetentionDays?: number;
  /**
     * ARN of the KMS key for encrypting the logging bucket.
     * If not provided, a new KMS key will be created.
     */
  readonly loggingBucketKmsKeyArn?: string;
  /**
     * Number of days to retain access logs in the access logging bucket.
     * @default - 60 days
     */
  readonly accessLoggingBucketRetentionDays?: number;
  /**
     * Tags to apply to the log archive account.
     * @default - Purpose: Log Archive, Environment: Production
     */
  readonly logArchiveAccountTags?: CfnTag[];
  /**
     * AWS account ID for the security audit account.
     * If not provided, a new account will be created using securityAuditAccountEmail.
     */
  readonly securityAuditAccountId?: string;
  /**
     * Email address for the security audit account.
     * Required when securityAuditAccountId is not provided.
     */
  readonly securityAuditAccountEmail?: string;
  /**
     * IAM role name for the security audit account.
     * @default - Uses Control Tower default role name
     */
  readonly securityAuditAccountRoleName?: string;
  /**
     * Tags to apply to the security audit account.
     * @default - Purpose: Security Audit, Environment: Production
     */
  readonly securityAuditAccountTags?: CfnTag[];
  /**
     * Custom organizational structure. If not provided, defaults to AWS best practices structure.
     *
     * The default structure includes:
     * - Security: Security and compliance accounts
     * - Infrastructure: Shared services and tooling accounts
     * - Workloads: Application workloads and production accounts
     * - Sandbox: Development and testing accounts
     * - Suspended: Isolated accounts requiring investigation
     *
     * @default - AWS best practices organizational structure
     */
  readonly organizationStructure?: { [key: string]: OrganizationalUnit };
}

/**
 * AWS Control Tower Landing Zone construct.
 *
 * This construct provides a comprehensive solution for deploying and managing
 * AWS Control Tower landing zones with centralized logging, security auditing,
 * and organizational structure management.
 *
 * @example
 * const landingZone = new ControlTowerLandingZone(this, 'MyLandingZone', {
 *   controlTowerStackName: 'my-control-tower',
 *   governedRegions: ['us-east-1', 'us-west-2'],
 *   logArchiveAccountEmail: 'log-archive@example.com',
 *   securityAuditAccountEmail: 'security-audit@example.com',
 *   logRetentionDays: 90,
 * });
 */
export class ControlTowerLandingZone extends Construct {
  /** The ARN of the Control Tower landing zone */
  public readonly landingZoneArn: string;
  /** The unique identifier of the Control Tower landing zone */
  public readonly landingZoneId: string;
  /** The ARN of the KMS key used for logging bucket encryption */
  public readonly loggingKmsKeyArn?: string;
  /** The AWS account ID of the log archive account */
  public readonly logArchiveAccountId?: string;
  /** The AWS account ID of the security audit account */
  public readonly securityAuditAccountId?: string;

  /**
     * Creates a new Control Tower Landing Zone.
     *
     * This constructor sets up the Control Tower landing zone with the specified
     * configuration, including centralized logging, security auditing, and
     * organizational structure management.
     *
     * @param scope - The scope in which this construct is defined
     * @param id - The unique identifier for this construct
     * @param props - Configuration properties for the landing zone
     *
     * @throws {Error} When logArchiveAccountEmail is required but not provided
     * @throws {Error} When securityAuditAccountEmail is required but not provided
     */
  constructor(scope: Construct, id: string, props: ControlTowerLandingZoneProps) {
    super(scope, id);

    const logArchiveAccount = props.logArchiveAccountId
      ? undefined
      : (() => {
        if (!props.logArchiveAccountEmail) {
          throw new Error('logArchiveAccountEmail is required when logArchiveAccountId is not provided');
        }
        return new AwsAccount(this, 'LogArchiveAccount', {
          name: 'Log Archive',
          email: props.logArchiveAccountEmail,
          tags: props.logArchiveAccountTags || [
            { key: 'Purpose', value: 'Log Archive' },
            { key: 'Environment', value: 'Production' },
          ],
        });
      })();

    const securityAuditAccount = props.securityAuditAccountId
      ? undefined
      : (() => {
        if (!props.securityAuditAccountEmail) {
          throw new Error('securityAuditAccountEmail is required when securityAuditAccountId is not provided');
        }
        return new AwsAccount(this, 'SecurityAuditAccount', {
          name: 'Security Audit Account',
          email: props.securityAuditAccountEmail,
          tags: props.securityAuditAccountTags || [
            { key: 'Purpose', value: 'Security Audit' },
            { key: 'Environment', value: 'Production' },
          ],
        });
      })();

    const logArchiveAccountId = props.logArchiveAccountId || logArchiveAccount?.accountId;
    const securityAuditAccountId = props.securityAuditAccountId || securityAuditAccount?.accountId;

    const loggingKmsKey: kms.Key | undefined = props.loggingBucketKmsKeyArn
      ? undefined
      : new kms.Key(this, 'LoggingKmsKey', {
        description: 'KMS key for Control Tower logging bucket encryption',
        enableKeyRotation: true,
        alias: 'control-tower-logging-key',
      });

    if (loggingKmsKey) {
      loggingKmsKey.addToResourcePolicy(new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [
          new iam.ServicePrincipal('s3.amazonaws.com'),
          new iam.ServicePrincipal('cloudtrail.amazonaws.com'),
          new iam.ServicePrincipal('config.amazonaws.com'),
          new iam.ServicePrincipal('controltower.amazonaws.com'),
        ],
        actions: ['kms:Decrypt', 'kms:GenerateDataKey'],
        resources: ['*'],
      }));
    }

    const defaultOrganizationStructure = {
      security: {
        name: 'Security',
        description: 'Security and compliance accounts',
      },
      infrastructure: {
        name: 'Infrastructure',
        description: 'Shared services and tooling accounts',
      },
      workloads: {
        name: 'Workloads',
        description: 'Application workloads and production accounts',
      },
      sandbox: {
        name: 'Sandbox',
        description: 'Development and testing accounts',
      },
      suspended: {
        name: 'Suspended',
        description: 'Isolated accounts requiring investigation',
      },
    };


    const baseManifest = {
      governedRegions: props.governedRegions ?? [Stack.of(this).region],
      organizationStructure: props.organizationStructure ?? defaultOrganizationStructure,
      centralizedLogging: {
        accountId: logArchiveAccountId,
        configurations: {
          loggingBucket: { retentionDays: props.logRetentionDays ?? 60 },
          accessLoggingBucket: { retentionDays: props.accessLoggingBucketRetentionDays ?? 60 },
          kmsKeyArn: props.loggingBucketKmsKeyArn ?? loggingKmsKey?.keyArn,
        },
        enabled: true,
      },
      securityRoles: {
        accountId: securityAuditAccountId,
      },
      accessManagement: {
        enabled: true,
      },
    };

    const landingZone = new controltower.CfnLandingZone(this, 'OrganizationLandingZone', {
      manifest: baseManifest,
      version: '3.3',
    });

    this.landingZoneArn = landingZone.attrArn;
    this.landingZoneId = landingZone.attrLandingZoneIdentifier;
    this.loggingKmsKeyArn = props.loggingBucketKmsKeyArn ?? loggingKmsKey?.keyArn;
    this.logArchiveAccountId = props.logArchiveAccountId ?? logArchiveAccount?.accountId;
    this.securityAuditAccountId = props.securityAuditAccountId ?? securityAuditAccount?.accountId;
  }
}