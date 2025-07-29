import { App, Stack } from 'aws-cdk-lib';
import { Template, Match, Annotations } from 'aws-cdk-lib/assertions';
import { ControlTowerLandingZone, ControlTowerLandingZoneProps } from '../../src/control-tower/control-tower-landing-zone';

describe('ControlTowerLandingZone Construct Testing', () => {
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
    it('Should create ControlTowerLandingZone instance with minimal props', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'MyControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);

      expect(landingZone).toBeInstanceOf(ControlTowerLandingZone);
      expect(landingZone.landingZoneArn).toBeDefined();
      expect(landingZone.landingZoneId).toBeDefined();
      expect(landingZone.loggingKmsKeyArn).toBeDefined();
      expect(landingZone.logArchiveAccountId).toBeDefined();
      expect(landingZone.securityAuditAccountId).toBeDefined();

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });

    it('Should create ControlTowerLandingZone with all optional props', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'FullControlTower',
        governedRegions: ['us-east-1', 'us-west-2'],
        logArchiveAccountId: '111111111111',
        logArchiveAccountEmail: 'logs@example.com',
        logArchiveAccountRoleName: 'LogArchiveRole',
        logRetentionDays: 90,
        loggingBucketKmsKeyArn: 'arn:aws:kms:us-east-1:123456789012:key/test-key',
        accessLoggingBucketRetentionDays: 30,
        logArchiveAccountTags: [
          { key: 'Purpose', value: 'Log Archive' },
          { key: 'Environment', value: 'Production' },
        ],
        securityAuditAccountId: '222222222222',
        securityAuditAccountEmail: 'security@example.com',
        securityAuditAccountRoleName: 'SecurityAuditRole',
        securityAuditAccountTags: [
          { key: 'Purpose', value: 'Security Audit' },
          { key: 'Environment', value: 'Production' },
        ],
        organizationStructure: {
          security: {
            name: 'Security',
            description: 'Security accounts',
          },
          workloads: {
            name: 'Workloads',
            description: 'Application workloads',
          },
        },
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);

      expect(landingZone).toBeInstanceOf(ControlTowerLandingZone);
      expect(landingZone.logArchiveAccountId).toBe('111111111111');
      expect(landingZone.securityAuditAccountId).toBe('222222222222');
      expect(landingZone.loggingKmsKeyArn).toBe('arn:aws:kms:us-east-1:123456789012:key/test-key');

      Annotations.fromStack(stack).hasNoError('*', Match.stringLikeRegexp('.*'));
    });
  });

  describe('AWS Control Tower Landing Zone Resource', () => {
    it('Should create AWS::ControlTower::LandingZone with correct properties', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'TestControlTower',
        governedRegions: ['us-east-1'],
        logRetentionDays: 60,
        accessLoggingBucketRetentionDays: 30,
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::ControlTower::LandingZone', {
        Manifest: Match.objectLike({
          governedRegions: ['us-east-1'],
          organizationStructure: Match.anyValue(),
          centralizedLogging: Match.objectLike({
            enabled: true,
            configurations: Match.objectLike({
              loggingBucket: { retentionDays: 60 },
              accessLoggingBucket: { retentionDays: 30 },
            }),
          }),
          securityRoles: Match.anyValue(),
          accessManagement: Match.objectLike({
            enabled: true,
          }),
        }),
        Version: '3.3',
      });
    });

    it('Should create landing zone with default organization structure', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'DefaultStructureControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::ControlTower::LandingZone', {
        Manifest: Match.objectLike({
          organizationStructure: Match.objectLike({
            security: Match.objectLike({
              name: 'Security',
              description: 'Security and compliance accounts',
            }),
            infrastructure: Match.objectLike({
              name: 'Infrastructure',
              description: 'Shared services and tooling accounts',
            }),
            workloads: Match.objectLike({
              name: 'Workloads',
              description: 'Application workloads and production accounts',
            }),
            sandbox: Match.objectLike({
              name: 'Sandbox',
              description: 'Development and testing accounts',
            }),
            suspended: Match.objectLike({
              name: 'Suspended',
              description: 'Isolated accounts requiring investigation',
            }),
          }),
        }),
      });
    });

    it('Should create landing zone with custom organization structure', () => {
      const customStructure = {
        'custom-security': {
          name: 'Custom Security',
          description: 'Custom security accounts',
        },
        'custom-workloads': {
          name: 'Custom Workloads',
          description: 'Custom workload accounts',
        },
      };

      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'CustomStructureControlTower',
        organizationStructure: customStructure,
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::ControlTower::LandingZone', {
        Manifest: Match.objectLike({
          organizationStructure: customStructure,
        }),
      });
    });
  });

  describe('Account Creation', () => {
    it('Should create log archive account when email is provided and ID is not', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'LogArchiveControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        logArchiveAccountTags: [
          { key: 'Purpose', value: 'Log Archive' },
          { key: 'Environment', value: 'Production' },
        ],
        securityAuditAccountEmail: 'security@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      // Should create an AWS Account for log archive
      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'Log Archive',
        Email: 'logs@example.com',
        Tags: Match.anyValue(), // Just check that tags exist, don't care about content
      });

      expect(landingZone.logArchiveAccountId).toBeDefined();
    });

    it('Should create security audit account when email is provided and ID is not', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'SecurityAuditControlTower',
        securityAuditAccountEmail: 'security@example.com',
        securityAuditAccountTags: [
          { key: 'Purpose', value: 'Security Audit' },
          { key: 'Environment', value: 'Production' },
        ],
        logArchiveAccountEmail: 'logs@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      // Should create an AWS Account for security audit
      template.hasResourceProperties('AWS::Organizations::Account', {
        AccountName: 'Security Audit Account',
        Email: 'security@example.com',
        Tags: Match.anyValue(), // Just check that tags exist, don't care about content
      });

      expect(landingZone.securityAuditAccountId).toBeDefined();
    });

    it('Should use existing account IDs when provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'ExistingAccountsControlTower',
        logArchiveAccountId: '111111111111',
        securityAuditAccountId: '222222222222',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      // Should not create new accounts
      template.resourceCountIs('AWS::Organizations::Account', 0);

      expect(landingZone.logArchiveAccountId).toBe('111111111111');
      expect(landingZone.securityAuditAccountId).toBe('222222222222');
    });
  });

  describe('KMS Key Creation', () => {
    it('Should create KMS key when loggingBucketKmsKeyArn is not provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'KmsKeyControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::KMS::Key', {
        Description: 'KMS key for Control Tower logging bucket encryption',
        EnableKeyRotation: true,
      });

      expect(landingZone.loggingKmsKeyArn).toBeDefined();
    });

    it('Should use provided KMS key ARN when specified', () => {
      const kmsKeyArn = 'arn:aws:kms:us-east-1:123456789012:key/test-key';
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'ProvidedKmsKeyControlTower',
        loggingBucketKmsKeyArn: kmsKeyArn,
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      // Should not create new KMS key
      template.resourceCountIs('AWS::KMS::Key', 0);

      expect(landingZone.loggingKmsKeyArn).toBe(kmsKeyArn);
    });
  });

  describe('Error Handling', () => {
    it('Should throw error when logArchiveAccountEmail is required but not provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'MissingLogEmailControlTower',
        securityAuditAccountEmail: 'security@example.com',
        // logArchiveAccountEmail not provided
      };

      expect(() => {
        new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      }).toThrow('logArchiveAccountEmail is required when logArchiveAccountId is not provided');
    });

    it('Should throw error when securityAuditAccountEmail is required but not provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'MissingSecurityEmailControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        // securityAuditAccountEmail not provided
      };

      expect(() => {
        new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      }).toThrow('securityAuditAccountEmail is required when securityAuditAccountId is not provided');
    });
  });

  describe('Default Values', () => {
    it('Should use default values when optional props are not provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'DefaultValuesControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::ControlTower::LandingZone', {
        Manifest: Match.objectLike({
          centralizedLogging: Match.objectLike({
            configurations: Match.objectLike({
              loggingBucket: { retentionDays: 60 },
              accessLoggingBucket: { retentionDays: 60 },
            }),
          }),
        }),
      });
    });

    it('Should use stack region when governedRegions is not provided', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'DefaultRegionControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      new ControlTowerLandingZone(stack, 'LandingZoneTest', props);
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::ControlTower::LandingZone', {
        Manifest: Match.objectLike({
          governedRegions: ['us-east-1'], // Stack region
        }),
      });
    });
  });

  describe('Resource Properties', () => {
    it('Should expose correct landing zone properties', () => {
      const props: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'PropertiesTestControlTower',
        logArchiveAccountEmail: 'logs@example.com',
        securityAuditAccountEmail: 'security@example.com',
      };

      const landingZone = new ControlTowerLandingZone(stack, 'LandingZoneTest', props);

      // Verify that the properties are correctly exposed
      expect(landingZone.landingZoneArn).toBeDefined();
      expect(landingZone.landingZoneId).toBeDefined();
      expect(landingZone.loggingKmsKeyArn).toBeDefined();
      expect(landingZone.logArchiveAccountId).toBeDefined();
      expect(landingZone.securityAuditAccountId).toBeDefined();

      const template = Template.fromStack(stack);
      template.hasResource('AWS::ControlTower::LandingZone', {});
    });
  });

  describe('Multiple Instances', () => {
    it('Should create multiple landing zones with unique resources', () => {
      const props1: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'FirstControlTower',
        logArchiveAccountEmail: 'logs1@example.com',
        securityAuditAccountEmail: 'security1@example.com',
      };

      const props2: ControlTowerLandingZoneProps = {
        controlTowerStackName: 'SecondControlTower',
        logArchiveAccountEmail: 'logs2@example.com',
        securityAuditAccountEmail: 'security2@example.com',
      };

      new ControlTowerLandingZone(stack, 'FirstLandingZone', props1);
      new ControlTowerLandingZone(stack, 'SecondLandingZone', props2);

      const template = Template.fromStack(stack);

      // Should have two landing zone resources
      template.resourceCountIs('AWS::ControlTower::LandingZone', 2);

      // Should have four account resources (2 log archive + 2 security audit)
      template.resourceCountIs('AWS::Organizations::Account', 4);

      // Should have two KMS keys
      template.resourceCountIs('AWS::KMS::Key', 2);
    });
  });
});
