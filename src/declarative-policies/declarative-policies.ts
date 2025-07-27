import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export enum VpcBlockPublicAccessMode {
  OFF = 'off',
  BLOCK_INGRESS = 'block_ingress',
  BLOCK_BIDIRECTIONAL = 'block_bidirectional',
}

export enum AllowedImagesState {
  ENABLED = 'enabled',
  AUDIT_MODE = 'audit_mode',
}

export enum ImageProvider {
  AMAZON = 'amazon',
  AWS_MARKETPLACE = 'aws_marketplace',
  AWS_BACKUP_VAULT = 'aws_backup_vault',
}

export enum HttpTokens {
  NO_PREFERENCE = 'no_preference',
  REQUIRED = 'required',
  OPTIONAL = 'optional',
}

export enum HttpEndpoint {
  NO_PREFERENCE = 'no_preference',
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export enum InstanceMetadataTags {
  NO_PREFERENCE = 'no_preference',
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export enum SnapshotBlockPublicAccessState {
  BLOCK_NEW_SHARING = 'block_new_sharing',
  BLOCK_ALL_SHARING = 'block_all_sharing',
}

export type ImageProviderOrAccountId = ImageProvider | string;

export interface DeclarativePolicyProps {
  readonly targetIds: string[];
  readonly name?: string;
  readonly description?: string;
  readonly vpcBlockPublicAccess?: boolean;
  readonly disableSerialConsoleAccess?: boolean;
  readonly imageBlockPublicAccess?: boolean;
  readonly restrictImageProviders?: boolean;
  readonly instanceMetadataDefaults?: boolean;
  readonly blockPublicSnapshots?: boolean;
  readonly vpcBlockPublicAccessMode?: VpcBlockPublicAccessMode;
  readonly allowedImagesState?: AllowedImagesState;
  readonly allowedImageProviders?: ImageProviderOrAccountId[];
  readonly httpTokens?: HttpTokens;
  readonly httpPutResponseHopLimit?: number;
  readonly httpEndpoint?: HttpEndpoint;
  readonly instanceMetadataTags?: InstanceMetadataTags;
  readonly snapshotBlockPublicAccessState?: SnapshotBlockPublicAccessState;
}

export class DeclarativePolicy extends Construct {
  public readonly declarativePolicyArn!: string;
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