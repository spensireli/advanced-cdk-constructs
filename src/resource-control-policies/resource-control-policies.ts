import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ResourceControlPolicyProps {
  readonly TargetIds: string[];
  readonly SourceOrgID: string;
  readonly Name?: string;
  readonly SourceAccount?: string[];
  readonly EnforceConfusedDeputyProtection: boolean;
  readonly EnforceSecureTransport: boolean;
}

export class ResourceControlPolicy extends Construct {
  public readonly ResourceControlPolicyArn: string;
  constructor(scope: Construct, id: string, props: ResourceControlPolicyProps) {
    super(scope, id);

    const statements: any[] = [];

    if (props.EnforceConfusedDeputyProtection) {
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
            'aws:SourceOrgID': props.SourceOrgID,
            ...(props.SourceAccount && { 'aws:SourceAccount': props.SourceAccount }),
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

    if (props.EnforceSecureTransport) {
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
      name: props.Name ?? `ResourceControlPolicy-${this.node.id}`,
      type: 'RESOURCE_CONTROL_POLICY',
      description: 'Resource Control Policy from Advanced CDK Constructs',
      targetIds: props.TargetIds,
    });
    this.ResourceControlPolicyArn = applyResourceControlPolicy.attrArn;

  }
}