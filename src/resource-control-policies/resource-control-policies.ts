import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for configuring a {@link ResourceControlPolicy}.
 */
export interface ResourceControlPolicyProps {
  /**
   * The list of target IDs (accounts, OUs, or roots) to which the policy will be attached.
   */
  readonly targetIds: string[];

  /**
   * The AWS Organization ID to enforce as the source organization in the policy.
   */
  readonly sourceOrgID: string;

  /**
   * The name of the resource control policy.
   * If not provided, a default name will be generated.
   * @default - Automatically generated name based on construct ID.
   */
  readonly name?: string;

  /**
   * Optional list of allowed source AWS account IDs.
   * If provided, only these accounts are allowed as source accounts.
   */
  readonly sourceAccount?: string[];

  /**
   * Whether to enforce Confused Deputy Protection in the policy.
   */
  readonly enforceConfusedDeputyProtection: boolean;

  /**
   * Whether to enforce Secure Transport in the policy.
   */
  readonly enforceSecureTransport: boolean;
}

/**
 * A CDK construct that creates and attaches an AWS Organizations Resource Control Policy.
 *
 * This policy can enforce Confused Deputy Protection and Secure Transport requirements
 * across specified AWS accounts, OUs, or roots.
 */
export class ResourceControlPolicy extends Construct {
  /**
   * The ARN of the created Resource Control Policy.
   */
  public readonly resourceControlPolicyArn!: string;

  /**
   * Creates a new {@link ResourceControlPolicy}.
   *
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the resource control policy.
   */
  constructor(scope: Construct, id: string, props: ResourceControlPolicyProps) {
    super(scope, id);

    const statements: any[] = [];

    if (props.enforceConfusedDeputyProtection) {
      const EnforceDeputyProtectionStatement = {
        Sid: 'EnforceConfusedDeputyProtection',
        Effect: 'Deny',
        Principal: '*',
        Action: [
          's3:*',
          'sqs:*',
          'kms:*',
          'secretsmanager:*',
          'sts:*',
        ],
        Resource: '*',
        Condition: {
          StringNotEqualsIfExists: {
            'aws:SourceOrgID': props.sourceOrgID,
            ...(props.sourceAccount && { 'aws:SourceAccount': props.sourceAccount }),
          },
          Bool: {
            'aws:PrincipalIsAWSService': 'true',
          },
          Null: {
            'aws:SourceArn': 'false',
          },
        },
      };
      statements.push(EnforceDeputyProtectionStatement);
    }

    if (props.enforceSecureTransport) {
      const EnforceSecureTransportStatement = {
        Sid: 'EnforceSecureTransport',
        Effect: 'Deny',
        Principal: '*',
        Action: [
          'sts:*',
          's3:*',
          'sqs:*',
          'secretsmanager:*',
          'kms:*',
        ],
        Resource: '*',
        Condition: {
          BoolIfExists: {
            'aws:SecureTransport': 'false',
          },
        },
      };
      statements.push(EnforceSecureTransportStatement);
    }

    const resourceControlPolicy = {
      Version: '2012-10-17',
      Statement: statements,
    };
    const applyResourceControlPolicy = new organizations.CfnPolicy(this, 'ResourceControlPolicy', {
      content: resourceControlPolicy,
      name: props.name ?? `ResourceControlPolicy-${this.node.id}`,
      type: 'RESOURCE_CONTROL_POLICY',
      description: 'Resource Control Policy from Advanced CDK Constructs',
      targetIds: props.targetIds,
    });
    this.resourceControlPolicyArn = applyResourceControlPolicy.attrArn;

  }
}