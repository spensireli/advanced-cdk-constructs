import { aws_organizations as organizations } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for defining a Service Control Policy.
 */
export interface ServiceControlPolicyProps {
  /**
   * The list of target IDs (accounts or organizational units) to which the policy will be attached.
   */
  readonly targetIds: string[];
  /**
   * The name of the Service Control Policy.
   * @default - A name based on the construct ID will be used.
   */
  readonly name?: string;
  /**
   * The policy statements to include in the Service Control Policy.
   */
  readonly statements: any[];
  /**
   * The description of the Service Control Policy.
   * @default - 'Service Control Policy from Advanced CDK Constructs'
   */
  readonly description?: string;
}

/**
 * Defines an AWS Organizations Service Control Policy (SCP) and attaches it to the specified targets.
 *
 * Example:
 * ```ts
 * new ServiceControlPolicy(this, 'MySCP', {
 *   targetIds: ['ou-xxxx-xxxxxxxx', '123456789012'],
 *   name: 'DenyEC2',
 *   statements: [
 *     {
 *       Effect: 'Deny',
 *       Action: 'ec2:*',
 *       Resource: '*',
 *     },
 *   ],
 *   description: 'Denies all EC2 actions',
 * });
 * ```
 */
export class ServiceControlPolicy extends Construct {
  /**
   * The ARN of the created Service Control Policy.
   */
  public readonly serviceControlPolicyArn!: string;

  /**
   * Creates a new Service Control Policy and attaches it to the specified targets.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The Service Control Policy properties.
   */
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