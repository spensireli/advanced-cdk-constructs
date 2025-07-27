import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Modes for blocking public access to VPCs.
 */
export enum VpcBlockPublicAccessMode {
  /** No blocking of public access. */
  OFF = 'off',
  /** Block only ingress (incoming) public access. */
  BLOCK_INGRESS = 'block_ingress',
  /** Block both ingress and egress (bidirectional) public access. */
  BLOCK_BIDIRECTIONAL = 'block_bidirectional',
}

/**
 * State for allowed images policy.
 */
export enum AllowedImagesState {
  /** Only allow images from specified providers. */
  ENABLED = 'enabled',
  /** Audit mode for allowed images. */
  AUDIT_MODE = 'audit_mode',
}

/**
 * Predefined image providers for allowed images policy.
 */
export enum ImageProvider {
  /** Amazon-provided images. */
  AMAZON = 'amazon',
  /** AWS Marketplace images. */
  AWS_MARKETPLACE = 'aws_marketplace',
  /** AWS Backup Vault images. */
  AWS_BACKUP_VAULT = 'aws_backup_vault',
}

/**
 * Options for IMDSv2 HttpTokens requirement.
 */
export enum HttpTokens {
  /** No preference for HttpTokens. */
  NO_PREFERENCE = 'no_preference',
  /** Require HttpTokens. */
  REQUIRED = 'required',
  /** HttpTokens are optional. */
  OPTIONAL = 'optional',
}

/**
 * Options for IMDSv2 HttpEndpoint.
 */
export enum HttpEndpoint {
  /** No preference for HttpEndpoint. */
  NO_PREFERENCE = 'no_preference',
  /** Enable HttpEndpoint. */
  ENABLED = 'enabled',
  /** Disable HttpEndpoint. */
  DISABLED = 'disabled',
}

/**
 * Options for IMDSv2 Instance Metadata Tags.
 */
export enum InstanceMetadataTags {
  /** No preference for instance metadata tags. */
  NO_PREFERENCE = 'no_preference',
  /** Enable instance metadata tags. */
  ENABLED = 'enabled',
  /** Disable instance metadata tags. */
  DISABLED = 'disabled',
}

/**
 * State for blocking public access to EBS snapshots.
 */
export enum SnapshotBlockPublicAccessState {
  /** Block new sharing of snapshots. */
  BLOCK_NEW_SHARING = 'block_new_sharing',
  /** Block all sharing of snapshots. */
  BLOCK_ALL_SHARING = 'block_all_sharing',
}

/**
 * An image provider (predefined or AWS account ID).
 */
export type ImageProviderOrAccountId = ImageProvider | string;

/**
 * Properties for configuring a DeclarativePolicy.
 */
export interface DeclarativePolicyProps {
  /** The target AWS account or organizational unit IDs to which the policy will be attached. */
  readonly targetIds: string[];
  /** The name of the policy. */
  readonly name?: string;
  /** The description of the policy. */
  readonly description?: string;
  /** Whether to block public access to VPCs. */
  readonly vpcBlockPublicAccess?: boolean;
  /** Whether to disable serial console access. */
  readonly disableSerialConsoleAccess?: boolean;
  /** Whether to block public access to AMIs. */
  readonly imageBlockPublicAccess?: boolean;
  /** Whether to restrict allowed image providers. */
  readonly restrictImageProviders?: boolean;
  /** Whether to enforce instance metadata service defaults. */
  readonly instanceMetadataDefaults?: boolean;
  /** Whether to block public sharing of EBS snapshots. */
  readonly blockPublicSnapshots?: boolean;
  /** The mode for blocking public access to VPCs. */
  readonly vpcBlockPublicAccessMode?: VpcBlockPublicAccessMode;
  /** The state for allowed images policy. */
  readonly allowedImagesState?: AllowedImagesState;
  /** The list of allowed image providers or AWS account IDs. */
  readonly allowedImageProviders?: ImageProviderOrAccountId[];
  /** The HttpTokens setting for instance metadata service. */
  readonly httpTokens?: HttpTokens;
  /** The hop limit for HTTP PUT responses from the instance metadata service. */
  readonly httpPutResponseHopLimit?: number;
  /** The HttpEndpoint setting for instance metadata service. */
  readonly httpEndpoint?: HttpEndpoint;
  /** The instance metadata tags setting. */
  readonly instanceMetadataTags?: InstanceMetadataTags;
  /** The state for blocking public access to EBS snapshots. */
  readonly snapshotBlockPublicAccessState?: SnapshotBlockPublicAccessState;
}

/**
 * A CDK construct that creates an AWS Organizations EC2 Declarative Policy.
 *
 * This construct allows you to declaratively define and apply EC2-related policies
 * such as blocking public access to VPCs, restricting AMI providers, enforcing
 * instance metadata service settings, and more.
 *
 * Example:
 * ```ts
 * new DeclarativePolicy(this, 'MyPolicy', {
 *   targetIds: ['ou-xxxx-xxxxxxxx'],
 *   vpcBlockPublicAccess: true,
 *   vpcBlockPublicAccessMode: VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL,
 * });
 * ```
 */
export class DeclarativePolicy extends Construct {
  /**
   * The ARN of the created declarative policy.
   */
  public readonly declarativePolicyArn!: string;

  /**
   * Create a new DeclarativePolicy.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The policy properties.
   */
  constructor(scope: Construct, id: string, props: DeclarativePolicyProps) {
    super(scope, id);

    const statements: any[] = [];

    if (props.vpcBlockPublicAccess) {
      const vpcBlockPublicAccessStatement = {
        vpc_block_public_access: {
          internet_gateway_block: {
            mode: {
              '@@assign': props.vpcBlockPublicAccessMode ?? VpcBlockPublicAccessMode.BLOCK_INGRESS,
            },
            exclusions_allowed: {
              '@@assign': 'enabled',
            },
          },
        },
      };
      statements.push(vpcBlockPublicAccessStatement);
    }

    if (props.disableSerialConsoleAccess) {
      const serialConsoleDisableStatement = {
        serial_console_access: {
          status: {
            '@@assign': 'disabled',
          },
        },
      };
      statements.push(serialConsoleDisableStatement);
    }

    if (props.imageBlockPublicAccess) {
      const imageBlockPublicAccessStatement = {
        image_block_public_access: {
          state: {
            '@@assign': 'block_new_sharing',
          },
        },
      };
      statements.push(imageBlockPublicAccessStatement);
    }

    if (props.restrictImageProviders) {
      const allowedImagesStatement: any = {
        allowed_images_settings: {
          state: {
            '@@assign': props.allowedImagesState ?? AllowedImagesState.ENABLED,
          },
        },
      };

      if (props.allowedImageProviders && props.allowedImageProviders.length > 0) {
        allowedImagesStatement.allowed_images_settings.image_criteria = {
          criteria_1: {
            allowed_image_providers: {
              '@@append': props.allowedImageProviders,
            },
          },
        };
      }
      statements.push(allowedImagesStatement);
    }

    if (props.instanceMetadataDefaults) {
      const instanceMetadataDefaultsStatement = {
        instance_metadata_defaults: {
          http_tokens: {
            '@@assign': props.httpTokens ?? HttpTokens.REQUIRED,
          },
          http_put_response_hop_limit: {
            '@@assign': props.httpPutResponseHopLimit?.toString() ?? '4',
          },
          http_endpoint: {
            '@@assign': props.httpEndpoint ?? HttpEndpoint.ENABLED,
          },
          instance_metadata_tags: {
            '@@assign': props.instanceMetadataTags ?? InstanceMetadataTags.ENABLED,
          },
        },
      };
      statements.push(instanceMetadataDefaultsStatement);
    }

    if (props.blockPublicSnapshots) {
      const snapshotBlockPublicAccessStatement = {
        snapshot_block_public_access: {
          state: {
            '@@assign': props.snapshotBlockPublicAccessState ?? SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING,
          },
        },
      };
      statements.push(snapshotBlockPublicAccessStatement);
    }

    const declarativePolicy = {
      Version: '2012-10-17',
      Statement: statements,
    };

    const applyDeclarativePolicy = new organizations.CfnPolicy(this, `DeclarativePolicy-${this.node.id}`, {
      content: declarativePolicy,
      name: props.name ?? `DeclarativePolicy-${this.node.id}`,
      type: 'DECLARATIVE_POLICY_EC2',
      description: props.description ?? 'Declarative Policy from Advanced CDK Constructs',
      targetIds: props.targetIds,
    });
    this.declarativePolicyArn = applyDeclarativePolicy.attrArn;

  }
}