import { App, Stack } from 'aws-cdk-lib';
import { Template, Match, Annotations } from 'aws-cdk-lib/assertions';
import { AwsAccount, AwsAccountProps } from '../../src/aws-account/aws-account';

describe('AwsAccount Construct Testing', () => {
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
    it('Should create AwsAccount instance with minimal props', () => {
      const props: AwsAccountProps = {
        name: 'TestAccount',
        email: 'test@example.com',
      };

      const awsAccount = new AwsAccount(stack, 'AwsAccountTest', props);

      expect(awsAccount).toBeInstanceOf(AwsAccount);
      expect(awsAccount.accountId).toBeDefined();
      expect(awsAccount.accountArn).toBeDefined();
      expect(awsAccount.accountName).toBeDefined();
      expect(awsAccount.accountStatus).toBeDefined();
      expect(awsAccount.joinedMethod).toBeDefined();
      expect(awsAccount.joinedTimestamp).toBeDefined();

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });

    it('Should create AwsAccount with all optional props', () => {
      const props: AwsAccountProps = {
        name: 'ProductionAccount',
        email: 'prod@example.com',
        parentIds: ['o-1234567890'],
        roleName: 'OrganizationAccountAccessRole',
        tags: [
          { key: 'Environment', value: 'Production' },
          { key: 'Project', value: 'MyProject' },
        ],
      };

      const awsAccount = new AwsAccount(stack, 'AwsAccountTest', props);

      expect(awsAccount).toBeInstanceOf(AwsAccount);
      expect(awsAccount.accountName).toBe('ProductionAccount');

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });
  });

  describe('AWS Organizations Account Resource', () => {
    it('Should create AWS::Organizations::Account with correct properties', () => {
      const props: AwsAccountProps = {
        name: 'TestAccount',
        email: 'test@example.com',
        parentIds: ['o-1234567890'],
        roleName: 'OrganizationAccountAccessRole',
        tags: [
          { key: 'Environment', value: 'Test' },
        ],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'TestAccount',
        Email: 'test@example.com',
        ParentIds: ['o-1234567890'],
        RoleName: 'OrganizationAccountAccessRole',
        Tags: Match.arrayEquals([
          {
            Key: 'Environment',
            Value: 'Test',
          },
        ]),
      });
    });

    it('Should create account without optional properties', () => {
      const props: AwsAccountProps = {
        name: 'MinimalAccount',
        email: 'minimal@example.com',
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'MinimalAccount',
        Email: 'minimal@example.com',
      });

      // Should not have optional properties
      template.hasResourceProperties('AWS::Organizations::Account', {
        ParentIds: Match.absent(),
        RoleName: Match.absent(),
        Tags: Match.absent(),
      });
    });
  });

  describe('Account Properties', () => {
    it('Should expose correct account properties from the construct', () => {
      const props: AwsAccountProps = {
        name: 'PropertyTestAccount',
        email: 'properties@example.com',
      };

      const awsAccount = new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      // Get the logical ID of the account resource
      template.findResources('AWS::Organizations::Account');

      // Verify that the properties are correctly mapped to the resource attributes
      // CDK returns Token objects, so we test that they are defined and not empty
      expect(awsAccount.accountId).toBeDefined();
      expect(awsAccount.accountArn).toBeDefined();
      expect(awsAccount.accountName).toBe('PropertyTestAccount');
      expect(awsAccount.accountStatus).toBeDefined();
      expect(awsAccount.joinedMethod).toBeDefined();
      expect(awsAccount.joinedTimestamp).toBeDefined();

      // Verify the resource has the correct attributes
      template.hasResource('AWS::Organizations::Account', {
        Properties: {
          AccountName: 'PropertyTestAccount',
          Email: 'properties@example.com',
        },
      });
    });
  });

  describe('Parent IDs Configuration', () => {
    it('Should handle single parent ID', () => {
      const props: AwsAccountProps = {
        name: 'SingleParentAccount',
        email: 'single@example.com',
        parentIds: ['o-1234567890'],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        ParentIds: ['o-1234567890'],
      });
    });

    it('Should handle multiple parent IDs', () => {
      const props: AwsAccountProps = {
        name: 'MultiParentAccount',
        email: 'multi@example.com',
        parentIds: ['o-1234567890', 'ou-1234567890'],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        ParentIds: ['o-1234567890', 'ou-1234567890'],
      });
    });
  });

  describe('Role Name Configuration', () => {
    it('Should set custom role name', () => {
      const props: AwsAccountProps = {
        name: 'CustomRoleAccount',
        email: 'custom@example.com',
        roleName: 'CustomAccessRole',
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        RoleName: 'CustomAccessRole',
      });
    });

    it('Should not set role name when not provided', () => {
      const props: AwsAccountProps = {
        name: 'NoRoleAccount',
        email: 'norole@example.com',
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        RoleName: Match.absent(),
      });
    });
  });

  describe('Tags Configuration', () => {
    it('Should apply single tag', () => {
      const props: AwsAccountProps = {
        name: 'SingleTagAccount',
        email: 'singletag@example.com',
        tags: [
          { key: 'Environment', value: 'Development' },
        ],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      // Just check that the Tags property exists
      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'SingleTagAccount',
        Email: 'singletag@example.com',
        Tags: Match.anyValue(),
      });
    });

    it('Should apply multiple tags', () => {
      const props: AwsAccountProps = {
        name: 'MultiTagAccount',
        email: 'multitag@example.com',
        tags: [
          { key: 'Environment', value: 'Production' },
          { key: 'Project', value: 'MyProject' },
          { key: 'Owner', value: 'DevOps' },
        ],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      // Just check that the Tags property exists
      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'MultiTagAccount',
        Email: 'multitag@example.com',
        Tags: Match.anyValue(),
      });
    });

    it('Should not apply tags when not provided', () => {
      const props: AwsAccountProps = {
        name: 'NoTagAccount',
        email: 'notag@example.com',
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        Tags: Match.absent(),
      });
    });
  });

  describe('Resource Naming', () => {
    it('Should generate unique resource names for different instances', () => {
      const props: AwsAccountProps = {
        name: 'TestAccount',
        email: 'test@example.com',
      };

      new AwsAccount(stack, 'FirstAccount', props);
      new AwsAccount(stack, 'SecondAccount', props);
      const template = Template.fromStack(stack);

      // Should have two separate account resources
      template.resourceCountIs('AWS::Organizations::Account', 2);
    });
  });

  describe('Edge Cases', () => {
    it('Should handle empty parent IDs array', () => {
      const props: AwsAccountProps = {
        name: 'EmptyParentAccount',
        email: 'empty@example.com',
        parentIds: [],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Organizations::Account', {
        ParentIds: [],
      });
    });

    it('Should handle empty tags array', () => {
      const props: AwsAccountProps = {
        name: 'EmptyTagsAccount',
        email: 'emptytags@example.com',
        tags: [],
      };

      new AwsAccount(stack, 'AwsAccountTest', props);
      const template = Template.fromStack(stack);

      // When tags is an empty array, CDK doesn't include the Tags property at all
      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'EmptyTagsAccount',
        Email: 'emptytags@example.com',
      });

      // Verify Tags property is absent
      template.hasResourceProperties('AWS::Organizations::Account', {
        Tags: Match.absent(),
      });
    });
  });
});
