import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ResourceControlPolicyProps {
  readonly targetIds: string[];
  readonly sourceOrgID: string;
  readonly name?: string;
  readonly sourceAccount?: string[];
  readonly enforceConfusedDeputyProtection: boolean;
  readonly enforceSecureTransport: boolean;
}

export class ResourceControlPolicy extends Construct {
  public readonly resourceControlPolicyArn!: string;
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