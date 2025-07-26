import { App, Stack } from 'aws-cdk-lib';
import { Template, Match, Annotations } from 'aws-cdk-lib/assertions';
import { ResourceControlPolicy, ResourceControlPolicyProps } from '../../src/resource-control-policies/resource-control-policies';

describe('ResourceControlPolicy Construct Testing', () => {
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
    it('Should create ResourceControlPolicy instance with minimal props', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      const resourceControlPolicy = new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);

      expect(resourceControlPolicy).toBeInstanceOf(ResourceControlPolicy);
      expect(resourceControlPolicy.resourceControlPolicyArn).toBeDefined();

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });

    it('Should create ResourceControlPolicy with custom name', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        name: 'CustomResourceControlPolicy',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      const resourceControlPolicy = new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);

      expect(resourceControlPolicy).toBeInstanceOf(ResourceControlPolicy);

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });
  });

  describe('AWS Organizations Policy Resource', () => {
    it('Should create AWS::Organizations::Policy with correct properties', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        name: 'TestResourceControlPolicy',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Type: 'RESOURCE_CONTROL_POLICY',
        Name: 'TestResourceControlPolicy',
        Description: 'Resource Control Policy from Advanced CDK Constructs',
        TargetIds: ['o-1234567890'],
        Content: Match.objectLike({
          Version: '2012-10-17',
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'EnforceConfusedDeputyProtection',
              Effect: 'Deny',
              Principal: '*',
              Action: ['s3:*', 'sqs:*', 'kms:*', 'secretsmanager:*', 'sts:*'],
              Resource: '*',
            }),
            Match.objectLike({
              Sid: 'EnforceSecureTransport',
              Effect: 'Deny',
              Principal: '*',
              Action: ['sts:*', 's3:*', 'sqs:*', 'secretsmanager:*', 'kms:*'],
              Resource: '*',
            }),
          ]),
        }),
      });
    });

    it('Should generate default name when not provided', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Name: 'ResourceControlPolicy-ResourceControlPolicyTest',
      });
    });
  });

  describe('Policy Statements Configuration', () => {
    it('Should include EnforceConfusedDeputyProtection statement when enabled', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: false,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'EnforceConfusedDeputyProtection',
              Effect: 'Deny',
              Condition: Match.objectLike({
                StringNotEqualsIfExists: Match.objectLike({
                  'aws:SourceOrgID': 'o-1234567890',
                }),
                Bool: Match.objectLike({
                  'aws:PrincipalIsAWSService': 'true',
                }),
                Null: Match.objectLike({
                  'aws:SourceArn': 'false',
                }),
              }),
            }),
          ]),
        }),
      });
    });

    it('Should include EnforceSecureTransport statement when enabled', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: false,
        enforceSecureTransport: true,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'EnforceSecureTransport',
              Effect: 'Deny',
              Condition: Match.objectLike({
                BoolIfExists: Match.objectLike({
                  'aws:SecureTransport': 'false',
                }),
              }),
            }),
          ]),
        }),
      });
    });

    it('Should include both statements when both are enabled', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'EnforceConfusedDeputyProtection',
            }),
            Match.objectLike({
              Sid: 'EnforceSecureTransport',
            }),
          ]),
        }),
      });
    });

    it('Should include SourceAccount condition when provided', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        sourceAccount: ['123456789012', '098765432109'],
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: false,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Condition: Match.objectLike({
                StringNotEqualsIfExists: Match.objectLike({
                  'aws:SourceOrgID': 'o-1234567890',
                  'aws:SourceAccount': ['123456789012', '098765432109'],
                }),
              }),
            }),
          ]),
        }),
      });
    });
  });

  describe('Edge Cases', () => {
    it('Should handle empty statements array when both protections are disabled', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: false,
        enforceSecureTransport: false,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: [],
        }),
      });
    });

    it('Should handle multiple target IDs', () => {
      const props: ResourceControlPolicyProps = {
        targetIds: ['o-1234567890', 'o-0987654321'],
        sourceOrgID: 'o-1234567890',
        enforceConfusedDeputyProtection: true,
        enforceSecureTransport: true,
      };

      new ResourceControlPolicy(stack, 'ResourceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        TargetIds: ['o-1234567890', 'o-0987654321'],
      });
    });
  });
});
