import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import {
  DeclarativePolicy,
  DeclarativePolicyProps,
  VpcBlockPublicAccessMode,
  AllowedImagesState,
  ImageProvider,
  HttpTokens,
  HttpEndpoint,
  InstanceMetadataTags,
  SnapshotBlockPublicAccessState,
} from '../../src/declarative-policies/declarative-policies';

describe('DeclarativePolicy Construct', () => {
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'TestingStack', {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });
  });

  describe('Basic Instantiation', () => {
    it('should create a DeclarativePolicy with minimal props', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
      };

      const declarativePolicy = new DeclarativePolicy(stack, 'TestPolicy', props);

      expect(declarativePolicy).toBeInstanceOf(DeclarativePolicy);
      expect(declarativePolicy.declarativePolicyArn).toBeDefined();
    });

    it('should create a DeclarativePolicy with all optional props', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        name: 'TestDeclarativePolicy',
        description: 'Test description for declarative policy',
        vpcBlockPublicAccess: true,
        disableSerialConsoleAccess: true,
        imageBlockPublicAccess: true,
        restrictImageProviders: true,
        instanceMetadataDefaults: true,
        blockPublicSnapshots: true,
        vpcBlockPublicAccessMode: VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL,
        allowedImagesState: AllowedImagesState.AUDIT_MODE,
        allowedImageProviders: [ImageProvider.AMAZON, ImageProvider.AWS_MARKETPLACE],
        httpTokens: HttpTokens.REQUIRED,
        httpPutResponseHopLimit: 2,
        httpEndpoint: HttpEndpoint.ENABLED,
        instanceMetadataTags: InstanceMetadataTags.ENABLED,
        snapshotBlockPublicAccessState: SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING,
      };

      const declarativePolicy = new DeclarativePolicy(stack, 'TestPolicy', props);

      expect(declarativePolicy).toBeInstanceOf(DeclarativePolicy);
      expect(declarativePolicy.declarativePolicyArn).toBeDefined();
    });
  });

  describe('CDK Template Validation', () => {
    it('should create AWS::Organizations::Policy resource with correct properties', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        name: 'TestPolicy',
        description: 'Test description',
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Name: 'TestPolicy',
        Description: 'Test description',
        Type: 'DECLARATIVE_POLICY_EC2',
        TargetIds: ['ou-1234567890'],
        Content: Match.objectLike({
          Version: '2012-10-17',
          Statement: Match.arrayWith([
            Match.objectLike({
              vpc_block_public_access: {
                internet_gateway_block: {
                  mode: {
                    '@@assign': 'block_ingress',
                  },
                  exclusions_allowed: {
                    '@@assign': 'enabled',
                  },
                },
              },
            }),
            Match.objectLike({
              serial_console_access: {
                status: {
                  '@@assign': 'disabled',
                },
              },
            }),
            Match.objectLike({
              image_block_public_access: {
                state: {
                  '@@assign': 'block_new_sharing',
                },
              },
            }),
            Match.objectLike({
              allowed_images_settings: {
                state: {
                  '@@assign': 'enabled',
                },
              },
            }),
            Match.objectLike({
              instance_metadata_defaults: {
                http_tokens: {
                  '@@assign': 'required',
                },
                http_put_response_hop_limit: {
                  '@@assign': '4',
                },
                http_endpoint: {
                  '@@assign': 'enabled',
                },
                instance_metadata_tags: {
                  '@@assign': 'enabled',
                },
              },
            }),
            Match.objectLike({
              snapshot_block_public_access: {
                state: {
                  '@@assign': 'block_new_sharing',
                },
              },
            }),
          ]),
        }),
      });
    });

    it('should use default name and description when not provided', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Name: 'DeclarativePolicy-TestPolicy',
        Description: 'Declarative Policy from Advanced CDK Constructs',
        Type: 'DECLARATIVE_POLICY_EC2',
        TargetIds: ['ou-1234567890'],
      });
    });
  });

  describe('VPC Block Public Access', () => {
    it('should include VPC block public access statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        vpcBlockPublicAccess: true,
        vpcBlockPublicAccessMode: VpcBlockPublicAccessMode.BLOCK_INGRESS,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              vpc_block_public_access: {
                internet_gateway_block: {
                  mode: {
                    '@@assign': 'block_ingress',
                  },
                },
              },
            }),
          ]),
        }),
      });
    });

    it('should use default VPC block public access mode when not specified', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        vpcBlockPublicAccess: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              vpc_block_public_access: {
                internet_gateway_block: {
                  mode: {
                    '@@assign': 'block_ingress',
                  },
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Serial Console Access', () => {
    it('should include serial console disable statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        disableSerialConsoleAccess: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              serial_console_access: {
                status: {
                  '@@assign': 'disabled',
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Image Block Public Access', () => {
    it('should include image block public access statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        imageBlockPublicAccess: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              image_block_public_access: {
                state: {
                  '@@assign': 'block_new_sharing',
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Restrict Image Providers', () => {
    it('should include allowed images statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        restrictImageProviders: true,
        allowedImagesState: AllowedImagesState.ENABLED,
        allowedImageProviders: [ImageProvider.AMAZON, '123456789012'],
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              allowed_images_settings: {
                state: {
                  '@@assign': 'enabled',
                },
                image_criteria: {
                  criteria_1: {
                    allowed_image_providers: {
                      '@@append': ['amazon', '123456789012'],
                    },
                  },
                },
              },
            }),
          ]),
        }),
      });
    });

    it('should use default allowed images state when not specified', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        restrictImageProviders: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              allowed_images_settings: {
                state: {
                  '@@assign': 'enabled',
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Instance Metadata Defaults', () => {
    it('should include instance metadata defaults statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        instanceMetadataDefaults: true,
        httpTokens: HttpTokens.REQUIRED,
        httpPutResponseHopLimit: 2,
        httpEndpoint: HttpEndpoint.ENABLED,
        instanceMetadataTags: InstanceMetadataTags.ENABLED,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              instance_metadata_defaults: {
                http_tokens: {
                  '@@assign': 'required',
                },
                http_put_response_hop_limit: {
                  '@@assign': '2',
                },
                http_endpoint: {
                  '@@assign': 'enabled',
                },
                instance_metadata_tags: {
                  '@@assign': 'enabled',
                },
              },
            }),
          ]),
        }),
      });
    });

    it('should use default values when instance metadata defaults are not specified', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        instanceMetadataDefaults: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              instance_metadata_defaults: {
                http_tokens: {
                  '@@assign': 'required',
                },
                http_put_response_hop_limit: {
                  '@@assign': '4',
                },
                http_endpoint: {
                  '@@assign': 'enabled',
                },
                instance_metadata_tags: {
                  '@@assign': 'enabled',
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Block Public Snapshots', () => {
    it('should include snapshot block public access statement when enabled', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        blockPublicSnapshots: true,
        snapshotBlockPublicAccessState: SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              snapshot_block_public_access: {
                state: {
                  '@@assign': 'block_all_sharing',
                },
              },
            }),
          ]),
        }),
      });
    });

    it('should use default snapshot block public access state when not specified', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        blockPublicSnapshots: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              snapshot_block_public_access: {
                state: {
                  '@@assign': 'block_new_sharing',
                },
              },
            }),
          ]),
        }),
      });
    });
  });

  describe('Multiple Features Combined', () => {
    it('should include all enabled features in the policy statement', () => {
      const props: DeclarativePolicyProps = {
        targetIds: ['ou-1234567890'],
        vpcBlockPublicAccess: true,
        disableSerialConsoleAccess: true,
        imageBlockPublicAccess: true,
        restrictImageProviders: true,
        instanceMetadataDefaults: true,
        blockPublicSnapshots: true,
      };

      new DeclarativePolicy(stack, 'TestPolicy', props);

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({ vpc_block_public_access: Match.anyValue() }),
            Match.objectLike({ serial_console_access: Match.anyValue() }),
            Match.objectLike({ image_block_public_access: Match.anyValue() }),
            Match.objectLike({ allowed_images_settings: Match.anyValue() }),
            Match.objectLike({ instance_metadata_defaults: Match.anyValue() }),
            Match.objectLike({ snapshot_block_public_access: Match.anyValue() }),
          ]),
        }),
      });
    });
  });

  describe('Enum Values', () => {
    it('should validate VpcBlockPublicAccessMode enum values', () => {
      expect(VpcBlockPublicAccessMode.OFF).toBe('off');
      expect(VpcBlockPublicAccessMode.BLOCK_INGRESS).toBe('block_ingress');
      expect(VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL).toBe('block_bidirectional');
    });

    it('should validate AllowedImagesState enum values', () => {
      expect(AllowedImagesState.ENABLED).toBe('enabled');
      expect(AllowedImagesState.AUDIT_MODE).toBe('audit_mode');
    });

    it('should validate ImageProvider enum values', () => {
      expect(ImageProvider.AMAZON).toBe('amazon');
      expect(ImageProvider.AWS_MARKETPLACE).toBe('aws_marketplace');
      expect(ImageProvider.AWS_BACKUP_VAULT).toBe('aws_backup_vault');
    });

    it('should validate HttpTokens enum values', () => {
      expect(HttpTokens.NO_PREFERENCE).toBe('no_preference');
      expect(HttpTokens.REQUIRED).toBe('required');
      expect(HttpTokens.OPTIONAL).toBe('optional');
    });

    it('should validate HttpEndpoint enum values', () => {
      expect(HttpEndpoint.NO_PREFERENCE).toBe('no_preference');
      expect(HttpEndpoint.ENABLED).toBe('enabled');
      expect(HttpEndpoint.DISABLED).toBe('disabled');
    });

    it('should validate InstanceMetadataTags enum values', () => {
      expect(InstanceMetadataTags.NO_PREFERENCE).toBe('no_preference');
      expect(InstanceMetadataTags.ENABLED).toBe('enabled');
      expect(InstanceMetadataTags.DISABLED).toBe('disabled');
    });

    it('should validate SnapshotBlockPublicAccessState enum values', () => {
      expect(SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING).toBe('block_new_sharing');
      expect(SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING).toBe('block_all_sharing');
    });
  });
});
