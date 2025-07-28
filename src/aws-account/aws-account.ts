import { aws_organizations as organizations, CfnTag } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for creating an AWS Account within an AWS Organization.
 */
export interface AwsAccountProps {
  /**
     * The name of the AWS account.
     * This will be the display name in the AWS Organizations console.
     */
  readonly name: string;

  /**
     * The email address associated with the AWS account.
     * This email must be unique and not already associated with another AWS account.
     */
  readonly email: string;

  /**
     * Optional list of parent organizational unit IDs or root IDs.
     * If not provided, the account will be placed in the root of the organization.
     * @default - Account will be placed in the root
     */
  readonly parentIds?: string[];

  /**
     * Optional IAM role name to be used for cross-account access.
     * This role will be created in the new account and can be assumed by the master account.
     * @default - No cross-account role will be created
     */
  readonly roleName?: string;

  /**
     * Optional list of tags to apply to the AWS account.
     * These tags will help with organization and cost tracking.
     * @default - No tags will be applied
     */
  readonly tags?: CfnTag[];
}

/**
 * A CDK construct that creates a new AWS Account within an AWS Organization.
 *
 * This construct creates a new AWS account and optionally places it within
 * specified organizational units. The account can be configured with cross-account
 * access roles and organizational tags.
 *
 * Example:
 * ```ts
 * new AwsAccount(this, 'MyAccount', {
 *   name: 'Development Account',
 *   email: 'dev-account@example.com',
 *   parentIds: ['ou-xxxx-xxxxxxxx'],
 *   roleName: 'OrganizationAccountAccessRole',
 *   tags: [
 *     { key: 'Environment', value: 'Development' },
 *     { key: 'Project', value: 'MyProject' }
 *   ]
 * });
 * ```
 */
export class AwsAccount extends Construct {
  /**
     * The AWS Account ID of the created account.
     * This will be available after the account creation is complete.
     */
  public readonly accountId: string;

  /**
     * The ARN of the created AWS account.
     */
  public readonly accountArn: string;

  /**
     * The name of the AWS account as specified in the props.
     */
  public readonly accountName: string;

  /**
     * The current status of the AWS account (e.g., 'ACTIVE', 'SUSPENDED').
     */
  public readonly accountStatus: string;

  /**
     * The method by which the account joined the organization (e.g., 'INVITED').
     */
  public readonly joinedMethod: string;

  /**
     * The timestamp when the account joined the organization.
     */
  public readonly joinedTimestamp: string;

  /**
     * Creates a new AWS Account within the organization.
     *
     * @param scope The parent construct.
     * @param id The construct ID.
     * @param props The properties for creating the AWS account.
     */
  constructor(scope: Construct, id: string, props: AwsAccountProps) {
    super(scope, id);

    const account = new organizations.CfnAccount(this, 'Account', {
      accountName: props.name,
      email: props.email,
      parentIds: props.parentIds,
      roleName: props.roleName,
      tags: props.tags,
    });

    this.accountId = account.attrAccountId;
    this.accountArn = account.attrArn;
    this.accountName = account.accountName;
    this.accountStatus = account.attrStatus;
    this.joinedMethod = account.attrJoinedMethod;
    this.joinedTimestamp = account.attrJoinedTimestamp;
  }
}