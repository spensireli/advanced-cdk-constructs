import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ServiceControlPolicyProps {
  readonly targetIds: string[];
  readonly name?: string;
  readonly statements: any[];
  readonly description?: string;
}

export class ServiceControlPolicy extends Construct {
  public readonly serviceControlPolicyArn!: string;
  constructor(scope: Construct, id: string, props: ServiceControlPolicyProps) {
    super(scope, id);
    const resourceControlPolicy = {
      Version: '2012-10-17',
      Statement: props.statements,
    };
    const applyServiceControlPolicy = new organizations.CfnPolicy(this, `ServiceControlPolicy-${this.node.id}`, {
      content: resourceControlPolicy,
      name: props.name ?? `ServiceControlPolicy-${this.node.id}`,
      type: 'SERVICE_CONTROL_POLICY',
      description: props.description ?? 'Service Control Policy from Advanced CDK Constructs',
      targetIds: props.targetIds,
    });
    this.serviceControlPolicyArn = applyServiceControlPolicy.attrArn;

  }
}