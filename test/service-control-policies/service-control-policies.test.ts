import { App, Stack } from 'aws-cdk-lib';
import { Template, Match, Annotations } from 'aws-cdk-lib/assertions';
import { ServiceControlPolicy, ServiceControlPolicyProps } from '../../src/service-control-policies/service-control-policies';

describe('ServiceControlPolicy Construct Testing', () => {
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
    it('Should create ServiceControlPolicy instance with minimal props', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'DenyAll',
            Effect: 'Deny',
            Action: '*',
            Resource: '*',
          },
        ],
      };

      const serviceControlPolicy = new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);

      expect(serviceControlPolicy).toBeInstanceOf(ServiceControlPolicy);
      expect(serviceControlPolicy.serviceControlPolicyArn).toBeDefined();

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });

    it('Should create ServiceControlPolicy with custom name and description', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        name: 'CustomServiceControlPolicy',
        description: 'Custom description for SCP',
        statements: [
          {
            Sid: 'AllowSpecificActions',
            Effect: 'Allow',
            Action: ['s3:GetObject', 's3:PutObject'],
            Resource: 'arn:aws:s3:::my-bucket/*',
          },
        ],
      };

      const serviceControlPolicy = new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);

      expect(serviceControlPolicy).toBeInstanceOf(ServiceControlPolicy);
      expect(serviceControlPolicy.serviceControlPolicyArn).toBeDefined();

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });
  });

  describe('AWS Organizations Policy Resource', () => {
    it('Should create AWS::Organizations::Policy with correct properties', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        name: 'TestServiceControlPolicy',
        description: 'Test SCP Description',
        statements: [
          {
            Sid: 'DenyRootUser',
            Effect: 'Deny',
            Action: '*',
            Resource: '*',
            Condition: {
              StringEquals: {
                'aws:PrincipalArn': 'arn:aws:iam::*:root',
              },
            },
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Type: 'SERVICE_CONTROL_POLICY',
        Name: 'TestServiceControlPolicy',
        Description: 'Test SCP Description',
        TargetIds: ['o-1234567890'],
        Content: Match.objectLike({
          Version: '2012-10-17',
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'DenyRootUser',
              Effect: 'Deny',
              Action: '*',
              Resource: '*',
              Condition: Match.objectLike({
                StringEquals: Match.objectLike({
                  'aws:PrincipalArn': 'arn:aws:iam::*:root',
                }),
              }),
            }),
          ]),
        }),
      });
    });

    it('Should generate default name when not provided', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'AllowEC2',
            Effect: 'Allow',
            Action: ['ec2:*'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Name: 'ServiceControlPolicy-ServiceControlPolicyTest',
      });
    });

    it('Should use default description when not provided', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'AllowS3',
            Effect: 'Allow',
            Action: ['s3:*'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Description: 'Service Control Policy from Advanced CDK Constructs',
      });
    });
  });

  describe('Policy Statements Configuration', () => {
    it('Should include multiple statements in the policy', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'DenyRootUser',
            Effect: 'Deny',
            Action: '*',
            Resource: '*',
            Condition: {
              StringEquals: {
                'aws:PrincipalArn': 'arn:aws:iam::*:root',
              },
            },
          },
          {
            Sid: 'AllowEC2Actions',
            Effect: 'Allow',
            Action: ['ec2:Describe*', 'ec2:Get*'],
            Resource: '*',
          },
          {
            Sid: 'DenyS3Delete',
            Effect: 'Deny',
            Action: ['s3:DeleteObject', 's3:DeleteBucket'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'DenyRootUser',
            }),
            Match.objectLike({
              Sid: 'AllowEC2Actions',
            }),
            Match.objectLike({
              Sid: 'DenyS3Delete',
            }),
          ]),
        }),
      });
    });

    it('Should handle complex statement with nested conditions', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'DenyOutsideOrg',
            Effect: 'Deny',
            Action: '*',
            Resource: '*',
            Condition: {
              StringNotEquals: {
                'aws:PrincipalOrgID': 'o-1234567890',
              },
              Bool: {
                'aws:PrincipalIsAWSService': 'false',
              },
            },
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'DenyOutsideOrg',
              Effect: 'Deny',
              Action: '*',
              Resource: '*',
              Condition: Match.objectLike({
                StringNotEquals: Match.objectLike({
                  'aws:PrincipalOrgID': 'o-1234567890',
                }),
                Bool: Match.objectLike({
                  'aws:PrincipalIsAWSService': 'false',
                }),
              }),
            }),
          ]),
        }),
      });
    });
  });

  describe('Target IDs Configuration', () => {
    it('Should handle multiple target IDs', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890', 'o-0987654321', 'ou-1234567890'],
        statements: [
          {
            Sid: 'AllowReadOnly',
            Effect: 'Allow',
            Action: ['s3:GetObject', 's3:ListBucket'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        TargetIds: ['o-1234567890', 'o-0987654321', 'ou-1234567890'],
      });
    });

    it('Should handle single target ID', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'DenyAll',
            Effect: 'Deny',
            Action: '*',
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        TargetIds: ['o-1234567890'],
      });
    });
  });

  describe('Edge Cases', () => {
    it('Should handle empty statements array', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Version: '2012-10-17',
          Statement: [],
        }),
      });
    });

    it('Should handle statements without Sid', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Effect: 'Allow',
            Action: ['s3:GetObject'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Effect: 'Allow',
              Action: ['s3:GetObject'],
              Resource: '*',
            }),
          ]),
        }),
      });
    });

    it('Should handle complex nested statement structure', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'ComplexStatement',
            Effect: 'Allow',
            Action: ['s3:*'],
            Resource: '*',
            Condition: {
              StringEquals: {
                'aws:RequestTag/Environment': 'Production',
              },
              StringNotEquals: {
                'aws:PrincipalArn': 'arn:aws:iam::*:root',
              },
              Bool: {
                'aws:SecureTransport': 'true',
              },
            },
          },
        ],
      };

      new ServiceControlPolicy(stack, 'ServiceControlPolicyTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Policy', {
        Content: Match.objectLike({
          Statement: Match.arrayWith([
            Match.objectLike({
              Sid: 'ComplexStatement',
              Effect: 'Allow',
              Action: ['s3:*'],
              Resource: '*',
              Condition: Match.objectLike({
                StringEquals: Match.objectLike({
                  'aws:RequestTag/Environment': 'Production',
                }),
                StringNotEquals: Match.objectLike({
                  'aws:PrincipalArn': 'arn:aws:iam::*:root',
                }),
                Bool: Match.objectLike({
                  'aws:SecureTransport': 'true',
                }),
              }),
            }),
          ]),
        }),
      });
    });
  });

  describe('Resource Naming', () => {
    it('Should generate unique resource names for different instances', () => {
      const props: ServiceControlPolicyProps = {
        targetIds: ['o-1234567890'],
        statements: [
          {
            Sid: 'TestStatement',
            Effect: 'Allow',
            Action: ['s3:*'],
            Resource: '*',
          },
        ],
      };

      new ServiceControlPolicy(stack, 'FirstPolicy', props);
      new ServiceControlPolicy(stack, 'SecondPolicy', props);
      const template = Template.fromStack(stack);

      // Should have two separate policy resources
      template.resourceCountIs('AWS::Organizations::Policy', 2);
    });
  });
});
