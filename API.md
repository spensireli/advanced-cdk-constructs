# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAccount <a name="AwsAccount" id="advanced-cdk-constructs.AwsAccount"></a>

A CDK construct that creates a new AWS Account within an AWS Organization.

This construct creates a new AWS account and optionally places it within
specified organizational units. The account can be configured with cross-account
access roles and organizational tags.

Example:
```ts
new AwsAccount(this, 'MyAccount', {
  name: 'Development Account',
  email: 'dev-account@example.com',
  parentIds: ['ou-xxxx-xxxxxxxx'],
  roleName: 'OrganizationAccountAccessRole',
  tags: [
    { key: 'Environment', value: 'Development' },
    { key: 'Project', value: 'MyProject' }
  ]
});
```

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.AwsAccount.Initializer"></a>

```typescript
import { AwsAccount } from 'advanced-cdk-constructs'

new AwsAccount(scope: Construct, id: string, props: AwsAccountProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.AwsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.AwsAccountProps">AwsAccountProps</a></code> | The properties for creating the AWS account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.AwsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.AwsAccount.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.AwsAccount.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.AwsAccountProps">AwsAccountProps</a>

The properties for creating the AWS account.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.AwsAccount.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.AwsAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.AwsAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.AwsAccount.isConstruct"></a>

```typescript
import { AwsAccount } from 'advanced-cdk-constructs'

AwsAccount.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.AwsAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.accountArn">accountArn</a></code> | <code>string</code> | The ARN of the created AWS account. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.accountId">accountId</a></code> | <code>string</code> | The AWS Account ID of the created account. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.accountName">accountName</a></code> | <code>string</code> | The name of the AWS account as specified in the props. |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.accountStatus">accountStatus</a></code> | <code>string</code> | The current status of the AWS account (e.g., 'ACTIVE', 'SUSPENDED'). |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.joinedMethod">joinedMethod</a></code> | <code>string</code> | The method by which the account joined the organization (e.g., 'INVITED'). |
| <code><a href="#advanced-cdk-constructs.AwsAccount.property.joinedTimestamp">joinedTimestamp</a></code> | <code>string</code> | The timestamp when the account joined the organization. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.AwsAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accountArn`<sup>Required</sup> <a name="accountArn" id="advanced-cdk-constructs.AwsAccount.property.accountArn"></a>

```typescript
public readonly accountArn: string;
```

- *Type:* string

The ARN of the created AWS account.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="advanced-cdk-constructs.AwsAccount.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AWS Account ID of the created account.

This will be available after the account creation is complete.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="advanced-cdk-constructs.AwsAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

The name of the AWS account as specified in the props.

---

##### `accountStatus`<sup>Required</sup> <a name="accountStatus" id="advanced-cdk-constructs.AwsAccount.property.accountStatus"></a>

```typescript
public readonly accountStatus: string;
```

- *Type:* string

The current status of the AWS account (e.g., 'ACTIVE', 'SUSPENDED').

---

##### `joinedMethod`<sup>Required</sup> <a name="joinedMethod" id="advanced-cdk-constructs.AwsAccount.property.joinedMethod"></a>

```typescript
public readonly joinedMethod: string;
```

- *Type:* string

The method by which the account joined the organization (e.g., 'INVITED').

---

##### `joinedTimestamp`<sup>Required</sup> <a name="joinedTimestamp" id="advanced-cdk-constructs.AwsAccount.property.joinedTimestamp"></a>

```typescript
public readonly joinedTimestamp: string;
```

- *Type:* string

The timestamp when the account joined the organization.

---


### ControlTowerLandingZone <a name="ControlTowerLandingZone" id="advanced-cdk-constructs.ControlTowerLandingZone"></a>

AWS Control Tower Landing Zone construct.

This construct provides a comprehensive solution for deploying and managing
AWS Control Tower landing zones with centralized logging, security auditing,
and organizational structure management.

*Example*

```typescript
const landingZone = new ControlTowerLandingZone(this, 'MyLandingZone', {
  controlTowerStackName: 'my-control-tower',
  governedRegions: ['us-east-1', 'us-west-2'],
  logArchiveAccountEmail: 'log-archive@example.com',
  securityAuditAccountEmail: 'security-audit@example.com',
  logRetentionDays: 90,
});
```


#### Initializers <a name="Initializers" id="advanced-cdk-constructs.ControlTowerLandingZone.Initializer"></a>

```typescript
import { ControlTowerLandingZone } from 'advanced-cdk-constructs'

new ControlTowerLandingZone(scope: Construct, id: string, props: ControlTowerLandingZoneProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.id">id</a></code> | <code>string</code> | - The unique identifier for this construct. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps">ControlTowerLandingZoneProps</a></code> | - Configuration properties for the landing zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.id"></a>

- *Type:* string

The unique identifier for this construct.

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.ControlTowerLandingZone.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps">ControlTowerLandingZoneProps</a>

Configuration properties for the landing zone.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.ControlTowerLandingZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.ControlTowerLandingZone.isConstruct"></a>

```typescript
import { ControlTowerLandingZone } from 'advanced-cdk-constructs'

ControlTowerLandingZone.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.ControlTowerLandingZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.controlTowerAdminRole">controlTowerAdminRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The Control Tower admin role (either created or referenced). |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.landingZoneArn">landingZoneArn</a></code> | <code>string</code> | The ARN of the Control Tower landing zone. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.landingZoneId">landingZoneId</a></code> | <code>string</code> | The unique identifier of the Control Tower landing zone. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.logArchiveAccountId">logArchiveAccountId</a></code> | <code>string</code> | The AWS account ID of the log archive account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.loggingKmsKeyArn">loggingKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used for logging bucket encryption. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZone.property.securityAuditAccountId">securityAuditAccountId</a></code> | <code>string</code> | The AWS account ID of the security audit account. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.ControlTowerLandingZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `controlTowerAdminRole`<sup>Required</sup> <a name="controlTowerAdminRole" id="advanced-cdk-constructs.ControlTowerLandingZone.property.controlTowerAdminRole"></a>

```typescript
public readonly controlTowerAdminRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The Control Tower admin role (either created or referenced).

---

##### `landingZoneArn`<sup>Required</sup> <a name="landingZoneArn" id="advanced-cdk-constructs.ControlTowerLandingZone.property.landingZoneArn"></a>

```typescript
public readonly landingZoneArn: string;
```

- *Type:* string

The ARN of the Control Tower landing zone.

---

##### `landingZoneId`<sup>Required</sup> <a name="landingZoneId" id="advanced-cdk-constructs.ControlTowerLandingZone.property.landingZoneId"></a>

```typescript
public readonly landingZoneId: string;
```

- *Type:* string

The unique identifier of the Control Tower landing zone.

---

##### `logArchiveAccountId`<sup>Optional</sup> <a name="logArchiveAccountId" id="advanced-cdk-constructs.ControlTowerLandingZone.property.logArchiveAccountId"></a>

```typescript
public readonly logArchiveAccountId: string;
```

- *Type:* string

The AWS account ID of the log archive account.

---

##### `loggingKmsKeyArn`<sup>Optional</sup> <a name="loggingKmsKeyArn" id="advanced-cdk-constructs.ControlTowerLandingZone.property.loggingKmsKeyArn"></a>

```typescript
public readonly loggingKmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key used for logging bucket encryption.

---

##### `securityAuditAccountId`<sup>Optional</sup> <a name="securityAuditAccountId" id="advanced-cdk-constructs.ControlTowerLandingZone.property.securityAuditAccountId"></a>

```typescript
public readonly securityAuditAccountId: string;
```

- *Type:* string

The AWS account ID of the security audit account.

---


### DeclarativePolicy <a name="DeclarativePolicy" id="advanced-cdk-constructs.DeclarativePolicy"></a>

A CDK construct that creates an AWS Organizations EC2 Declarative Policy.

This construct allows you to declaratively define and apply EC2-related policies
such as blocking public access to VPCs, restricting AMI providers, enforcing
instance metadata service settings, and more.

Example:
```ts
new DeclarativePolicy(this, 'MyPolicy', {
  targetIds: ['ou-xxxx-xxxxxxxx'],
  vpcBlockPublicAccess: true,
  vpcBlockPublicAccessMode: VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL,
});
```

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.DeclarativePolicy.Initializer"></a>

```typescript
import { DeclarativePolicy } from 'advanced-cdk-constructs'

new DeclarativePolicy(scope: Construct, id: string, props: DeclarativePolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps">DeclarativePolicyProps</a></code> | The policy properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.DeclarativePolicyProps">DeclarativePolicyProps</a>

The policy properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.DeclarativePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.DeclarativePolicy.isConstruct"></a>

```typescript
import { DeclarativePolicy } from 'advanced-cdk-constructs'

DeclarativePolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.DeclarativePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.property.declarativePolicyArn">declarativePolicyArn</a></code> | <code>string</code> | The ARN of the created declarative policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.DeclarativePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `declarativePolicyArn`<sup>Required</sup> <a name="declarativePolicyArn" id="advanced-cdk-constructs.DeclarativePolicy.property.declarativePolicyArn"></a>

```typescript
public readonly declarativePolicyArn: string;
```

- *Type:* string

The ARN of the created declarative policy.

---


### GuardDutyConstruct <a name="GuardDutyConstruct" id="advanced-cdk-constructs.GuardDutyConstruct"></a>

A CDK construct that sets up AWS GuardDuty with configurable data sources and features.

Example:
```ts
new GuardDutyConstruct(this, 'GuardDuty', {
  enableGuardDuty: true,
  kubernetesAuditLogs: true,
  malwareProtection: true,
  s3Logs: true,
});
```

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer"></a>

```typescript
import { GuardDutyConstruct } from 'advanced-cdk-constructs'

new GuardDutyConstruct(scope: Construct, id: string, props?: GuardDutyConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps">GuardDutyConstructProps</a></code> | GuardDuty configuration properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Optional</sup> <a name="props" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.GuardDutyConstructProps">GuardDutyConstructProps</a>

GuardDuty configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.GuardDutyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.GuardDutyConstruct.isConstruct"></a>

```typescript
import { GuardDutyConstruct } from 'advanced-cdk-constructs'

GuardDutyConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.GuardDutyConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.property.detectorId">detectorId</a></code> | <code>string</code> | The ID of the created GuardDuty detector. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.GuardDutyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="advanced-cdk-constructs.GuardDutyConstruct.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The ID of the created GuardDuty detector.

---


### ResourceControlPolicy <a name="ResourceControlPolicy" id="advanced-cdk-constructs.ResourceControlPolicy"></a>

A CDK construct that creates and attaches an AWS Organizations Resource Control Policy.

This policy can enforce Confused Deputy Protection and Secure Transport requirements
across specified AWS accounts, OUs, or roots.

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer"></a>

```typescript
import { ResourceControlPolicy } from 'advanced-cdk-constructs'

new ResourceControlPolicy(scope: Construct, id: string, props: ResourceControlPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps">ResourceControlPolicyProps</a></code> | The properties for the resource control policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.ResourceControlPolicyProps">ResourceControlPolicyProps</a>

The properties for the resource control policy.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.ResourceControlPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.ResourceControlPolicy.isConstruct"></a>

```typescript
import { ResourceControlPolicy } from 'advanced-cdk-constructs'

ResourceControlPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.ResourceControlPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.property.resourceControlPolicyArn">resourceControlPolicyArn</a></code> | <code>string</code> | The ARN of the created Resource Control Policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.ResourceControlPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `resourceControlPolicyArn`<sup>Required</sup> <a name="resourceControlPolicyArn" id="advanced-cdk-constructs.ResourceControlPolicy.property.resourceControlPolicyArn"></a>

```typescript
public readonly resourceControlPolicyArn: string;
```

- *Type:* string

The ARN of the created Resource Control Policy.

---


### ServiceControlPolicy <a name="ServiceControlPolicy" id="advanced-cdk-constructs.ServiceControlPolicy"></a>

Defines an AWS Organizations Service Control Policy (SCP) and attaches it to the specified targets.

Example:
```ts
new ServiceControlPolicy(this, 'MySCP', {
  targetIds: ['ou-xxxx-xxxxxxxx', '123456789012'],
  name: 'DenyEC2',
  statements: [
    {
      Effect: 'Deny',
      Action: 'ec2:*',
      Resource: '*',
    },
  ],
  description: 'Denies all EC2 actions',
});
```

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer"></a>

```typescript
import { ServiceControlPolicy } from 'advanced-cdk-constructs'

new ServiceControlPolicy(scope: Construct, id: string, props: ServiceControlPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps">ServiceControlPolicyProps</a></code> | The Service Control Policy properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.ServiceControlPolicyProps">ServiceControlPolicyProps</a>

The Service Control Policy properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="advanced-cdk-constructs.ServiceControlPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="advanced-cdk-constructs.ServiceControlPolicy.isConstruct"></a>

```typescript
import { ServiceControlPolicy } from 'advanced-cdk-constructs'

ServiceControlPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="advanced-cdk-constructs.ServiceControlPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.property.serviceControlPolicyArn">serviceControlPolicyArn</a></code> | <code>string</code> | The ARN of the created Service Control Policy. |

---

##### `node`<sup>Required</sup> <a name="node" id="advanced-cdk-constructs.ServiceControlPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceControlPolicyArn`<sup>Required</sup> <a name="serviceControlPolicyArn" id="advanced-cdk-constructs.ServiceControlPolicy.property.serviceControlPolicyArn"></a>

```typescript
public readonly serviceControlPolicyArn: string;
```

- *Type:* string

The ARN of the created Service Control Policy.

---


## Structs <a name="Structs" id="Structs"></a>

### AwsAccountProps <a name="AwsAccountProps" id="advanced-cdk-constructs.AwsAccountProps"></a>

Properties for creating an AWS Account within an AWS Organization.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.AwsAccountProps.Initializer"></a>

```typescript
import { AwsAccountProps } from 'advanced-cdk-constructs'

const awsAccountProps: AwsAccountProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.AwsAccountProps.property.email">email</a></code> | <code>string</code> | The email address associated with the AWS account. |
| <code><a href="#advanced-cdk-constructs.AwsAccountProps.property.name">name</a></code> | <code>string</code> | The name of the AWS account. |
| <code><a href="#advanced-cdk-constructs.AwsAccountProps.property.parentIds">parentIds</a></code> | <code>string[]</code> | Optional list of parent organizational unit IDs or root IDs. |
| <code><a href="#advanced-cdk-constructs.AwsAccountProps.property.roleName">roleName</a></code> | <code>string</code> | Optional IAM role name to be used for cross-account access. |
| <code><a href="#advanced-cdk-constructs.AwsAccountProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Optional list of tags to apply to the AWS account. |

---

##### `email`<sup>Required</sup> <a name="email" id="advanced-cdk-constructs.AwsAccountProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address associated with the AWS account.

This email must be unique and not already associated with another AWS account.

---

##### `name`<sup>Required</sup> <a name="name" id="advanced-cdk-constructs.AwsAccountProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AWS account.

This will be the display name in the AWS Organizations console.

---

##### `parentIds`<sup>Optional</sup> <a name="parentIds" id="advanced-cdk-constructs.AwsAccountProps.property.parentIds"></a>

```typescript
public readonly parentIds: string[];
```

- *Type:* string[]
- *Default:* Account will be placed in the root

Optional list of parent organizational unit IDs or root IDs.

If not provided, the account will be placed in the root of the organization.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="advanced-cdk-constructs.AwsAccountProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* No cross-account role will be created

Optional IAM role name to be used for cross-account access.

This role will be created in the new account and can be assumed by the master account.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="advanced-cdk-constructs.AwsAccountProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* No tags will be applied

Optional list of tags to apply to the AWS account.

These tags will help with organization and cost tracking.

---

### ControlTowerLandingZoneProps <a name="ControlTowerLandingZoneProps" id="advanced-cdk-constructs.ControlTowerLandingZoneProps"></a>

Properties for configuring AWS Control Tower Landing Zone.

This interface defines all the configuration options available for setting up
a Control Tower landing zone with centralized logging, security auditing,
and organizational structure management.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.Initializer"></a>

```typescript
import { ControlTowerLandingZoneProps } from 'advanced-cdk-constructs'

const controlTowerLandingZoneProps: ControlTowerLandingZoneProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.controlTowerStackName">controlTowerStackName</a></code> | <code>string</code> | The name of the Control Tower stack. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.accessLoggingBucketRetentionDays">accessLoggingBucketRetentionDays</a></code> | <code>number</code> | Number of days to retain access logs in the access logging bucket. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.createControlTowerAdminRole">createControlTowerAdminRole</a></code> | <code>boolean</code> | Whether to create the Control Tower admin role if it doesn't already exist. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.governedRegions">governedRegions</a></code> | <code>string[]</code> | AWS regions where Control Tower governance will be applied. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountEmail">logArchiveAccountEmail</a></code> | <code>string</code> | Email address for the log archive account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountId">logArchiveAccountId</a></code> | <code>string</code> | AWS account ID for the log archive account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountRoleName">logArchiveAccountRoleName</a></code> | <code>string</code> | IAM role name for the log archive account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountTags">logArchiveAccountTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags to apply to the log archive account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.loggingBucketKmsKeyArn">loggingBucketKmsKeyArn</a></code> | <code>string</code> | ARN of the KMS key for encrypting the logging bucket. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logRetentionDays">logRetentionDays</a></code> | <code>number</code> | Number of days to retain logs in the centralized logging bucket. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.organizationStructure">organizationStructure</a></code> | <code>{[ key: string ]: <a href="#advanced-cdk-constructs.OrganizationalUnit">OrganizationalUnit</a>}</code> | Custom organizational structure. If not provided, defaults to AWS best practices structure. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountEmail">securityAuditAccountEmail</a></code> | <code>string</code> | Email address for the security audit account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountId">securityAuditAccountId</a></code> | <code>string</code> | AWS account ID for the security audit account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountRoleName">securityAuditAccountRoleName</a></code> | <code>string</code> | IAM role name for the security audit account. |
| <code><a href="#advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountTags">securityAuditAccountTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags to apply to the security audit account. |

---

##### `controlTowerStackName`<sup>Required</sup> <a name="controlTowerStackName" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.controlTowerStackName"></a>

```typescript
public readonly controlTowerStackName: string;
```

- *Type:* string

The name of the Control Tower stack.

---

##### `accessLoggingBucketRetentionDays`<sup>Optional</sup> <a name="accessLoggingBucketRetentionDays" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.accessLoggingBucketRetentionDays"></a>

```typescript
public readonly accessLoggingBucketRetentionDays: number;
```

- *Type:* number
- *Default:* 60 days

Number of days to retain access logs in the access logging bucket.

---

##### `createControlTowerAdminRole`<sup>Optional</sup> <a name="createControlTowerAdminRole" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.createControlTowerAdminRole"></a>

```typescript
public readonly createControlTowerAdminRole: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to create the Control Tower admin role if it doesn't already exist.

If false, the construct will attempt to reference an existing role with the name 'AWSControlTowerAdmin'.

---

##### `governedRegions`<sup>Optional</sup> <a name="governedRegions" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.governedRegions"></a>

```typescript
public readonly governedRegions: string[];
```

- *Type:* string[]
- *Default:* Uses the current stack's region

AWS regions where Control Tower governance will be applied.

---

##### `logArchiveAccountEmail`<sup>Optional</sup> <a name="logArchiveAccountEmail" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountEmail"></a>

```typescript
public readonly logArchiveAccountEmail: string;
```

- *Type:* string

Email address for the log archive account.

Required when logArchiveAccountId is not provided.

---

##### `logArchiveAccountId`<sup>Optional</sup> <a name="logArchiveAccountId" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountId"></a>

```typescript
public readonly logArchiveAccountId: string;
```

- *Type:* string

AWS account ID for the log archive account.

If not provided, a new account will be created using logArchiveAccountEmail.

---

##### `logArchiveAccountRoleName`<sup>Optional</sup> <a name="logArchiveAccountRoleName" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountRoleName"></a>

```typescript
public readonly logArchiveAccountRoleName: string;
```

- *Type:* string
- *Default:* Uses Control Tower default role name

IAM role name for the log archive account.

---

##### `logArchiveAccountTags`<sup>Optional</sup> <a name="logArchiveAccountTags" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logArchiveAccountTags"></a>

```typescript
public readonly logArchiveAccountTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* Purpose: Log Archive, Environment: Production

Tags to apply to the log archive account.

---

##### `loggingBucketKmsKeyArn`<sup>Optional</sup> <a name="loggingBucketKmsKeyArn" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.loggingBucketKmsKeyArn"></a>

```typescript
public readonly loggingBucketKmsKeyArn: string;
```

- *Type:* string

ARN of the KMS key for encrypting the logging bucket.

If not provided, a new KMS key will be created.

---

##### `logRetentionDays`<sup>Optional</sup> <a name="logRetentionDays" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* number
- *Default:* 60 days

Number of days to retain logs in the centralized logging bucket.

---

##### `organizationStructure`<sup>Optional</sup> <a name="organizationStructure" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.organizationStructure"></a>

```typescript
public readonly organizationStructure: {[ key: string ]: OrganizationalUnit};
```

- *Type:* {[ key: string ]: <a href="#advanced-cdk-constructs.OrganizationalUnit">OrganizationalUnit</a>}
- *Default:* AWS best practices organizational structure

Custom organizational structure. If not provided, defaults to AWS best practices structure.

The default structure includes:
- Security: Security and compliance accounts
- Infrastructure: Shared services and tooling accounts
- Workloads: Application workloads and production accounts
- Sandbox: Development and testing accounts
- Suspended: Isolated accounts requiring investigation

---

##### `securityAuditAccountEmail`<sup>Optional</sup> <a name="securityAuditAccountEmail" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountEmail"></a>

```typescript
public readonly securityAuditAccountEmail: string;
```

- *Type:* string

Email address for the security audit account.

Required when securityAuditAccountId is not provided.

---

##### `securityAuditAccountId`<sup>Optional</sup> <a name="securityAuditAccountId" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountId"></a>

```typescript
public readonly securityAuditAccountId: string;
```

- *Type:* string

AWS account ID for the security audit account.

If not provided, a new account will be created using securityAuditAccountEmail.

---

##### `securityAuditAccountRoleName`<sup>Optional</sup> <a name="securityAuditAccountRoleName" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountRoleName"></a>

```typescript
public readonly securityAuditAccountRoleName: string;
```

- *Type:* string
- *Default:* Uses Control Tower default role name

IAM role name for the security audit account.

---

##### `securityAuditAccountTags`<sup>Optional</sup> <a name="securityAuditAccountTags" id="advanced-cdk-constructs.ControlTowerLandingZoneProps.property.securityAuditAccountTags"></a>

```typescript
public readonly securityAuditAccountTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* Purpose: Security Audit, Environment: Production

Tags to apply to the security audit account.

---

### DeclarativePolicyProps <a name="DeclarativePolicyProps" id="advanced-cdk-constructs.DeclarativePolicyProps"></a>

Properties for configuring a DeclarativePolicy.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.DeclarativePolicyProps.Initializer"></a>

```typescript
import { DeclarativePolicyProps } from 'advanced-cdk-constructs'

const declarativePolicyProps: DeclarativePolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | The target AWS account or organizational unit IDs to which the policy will be attached. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImageProviders">allowedImageProviders</a></code> | <code>string[]</code> | The list of allowed image providers or AWS account IDs. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImagesState">allowedImagesState</a></code> | <code><a href="#advanced-cdk-constructs.AllowedImagesState">AllowedImagesState</a></code> | The state for allowed images policy. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.blockPublicSnapshots">blockPublicSnapshots</a></code> | <code>boolean</code> | Whether to block public sharing of EBS snapshots. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.description">description</a></code> | <code>string</code> | The description of the policy. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.disableSerialConsoleAccess">disableSerialConsoleAccess</a></code> | <code>boolean</code> | Whether to disable serial console access. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#advanced-cdk-constructs.HttpEndpoint">HttpEndpoint</a></code> | The HttpEndpoint setting for instance metadata service. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | The hop limit for HTTP PUT responses from the instance metadata service. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpTokens">httpTokens</a></code> | <code><a href="#advanced-cdk-constructs.HttpTokens">HttpTokens</a></code> | The HttpTokens setting for instance metadata service. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.imageBlockPublicAccess">imageBlockPublicAccess</a></code> | <code>boolean</code> | Whether to block public access to AMIs. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataDefaults">instanceMetadataDefaults</a></code> | <code>boolean</code> | Whether to enforce instance metadata service defaults. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code><a href="#advanced-cdk-constructs.InstanceMetadataTags">InstanceMetadataTags</a></code> | The instance metadata tags setting. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.name">name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.restrictImageProviders">restrictImageProviders</a></code> | <code>boolean</code> | Whether to restrict allowed image providers. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.snapshotBlockPublicAccessState">snapshotBlockPublicAccessState</a></code> | <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState">SnapshotBlockPublicAccessState</a></code> | The state for blocking public access to EBS snapshots. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccess">vpcBlockPublicAccess</a></code> | <code>boolean</code> | Whether to block public access to VPCs. |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccessMode">vpcBlockPublicAccessMode</a></code> | <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode">VpcBlockPublicAccessMode</a></code> | The mode for blocking public access to VPCs. |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.DeclarativePolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

The target AWS account or organizational unit IDs to which the policy will be attached.

---

##### `allowedImageProviders`<sup>Optional</sup> <a name="allowedImageProviders" id="advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImageProviders"></a>

```typescript
public readonly allowedImageProviders: string[];
```

- *Type:* string[]

The list of allowed image providers or AWS account IDs.

---

##### `allowedImagesState`<sup>Optional</sup> <a name="allowedImagesState" id="advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImagesState"></a>

```typescript
public readonly allowedImagesState: AllowedImagesState;
```

- *Type:* <a href="#advanced-cdk-constructs.AllowedImagesState">AllowedImagesState</a>

The state for allowed images policy.

---

##### `blockPublicSnapshots`<sup>Optional</sup> <a name="blockPublicSnapshots" id="advanced-cdk-constructs.DeclarativePolicyProps.property.blockPublicSnapshots"></a>

```typescript
public readonly blockPublicSnapshots: boolean;
```

- *Type:* boolean

Whether to block public sharing of EBS snapshots.

Defaults to true.

---

##### `description`<sup>Optional</sup> <a name="description" id="advanced-cdk-constructs.DeclarativePolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy.

---

##### `disableSerialConsoleAccess`<sup>Optional</sup> <a name="disableSerialConsoleAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.disableSerialConsoleAccess"></a>

```typescript
public readonly disableSerialConsoleAccess: boolean;
```

- *Type:* boolean

Whether to disable serial console access.

Defaults to true.

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: HttpEndpoint;
```

- *Type:* <a href="#advanced-cdk-constructs.HttpEndpoint">HttpEndpoint</a>

The HttpEndpoint setting for instance metadata service.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

The hop limit for HTTP PUT responses from the instance metadata service.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpTokens"></a>

```typescript
public readonly httpTokens: HttpTokens;
```

- *Type:* <a href="#advanced-cdk-constructs.HttpTokens">HttpTokens</a>

The HttpTokens setting for instance metadata service.

---

##### `imageBlockPublicAccess`<sup>Optional</sup> <a name="imageBlockPublicAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.imageBlockPublicAccess"></a>

```typescript
public readonly imageBlockPublicAccess: boolean;
```

- *Type:* boolean

Whether to block public access to AMIs.

Defaults to true.

---

##### `instanceMetadataDefaults`<sup>Optional</sup> <a name="instanceMetadataDefaults" id="advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataDefaults"></a>

```typescript
public readonly instanceMetadataDefaults: boolean;
```

- *Type:* boolean

Whether to enforce instance metadata service defaults.

Defaults to true.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: InstanceMetadataTags;
```

- *Type:* <a href="#advanced-cdk-constructs.InstanceMetadataTags">InstanceMetadataTags</a>

The instance metadata tags setting.

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.DeclarativePolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy.

---

##### `restrictImageProviders`<sup>Optional</sup> <a name="restrictImageProviders" id="advanced-cdk-constructs.DeclarativePolicyProps.property.restrictImageProviders"></a>

```typescript
public readonly restrictImageProviders: boolean;
```

- *Type:* boolean

Whether to restrict allowed image providers.

Defaults to true.

---

##### `snapshotBlockPublicAccessState`<sup>Optional</sup> <a name="snapshotBlockPublicAccessState" id="advanced-cdk-constructs.DeclarativePolicyProps.property.snapshotBlockPublicAccessState"></a>

```typescript
public readonly snapshotBlockPublicAccessState: SnapshotBlockPublicAccessState;
```

- *Type:* <a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState">SnapshotBlockPublicAccessState</a>

The state for blocking public access to EBS snapshots.

---

##### `vpcBlockPublicAccess`<sup>Optional</sup> <a name="vpcBlockPublicAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccess"></a>

```typescript
public readonly vpcBlockPublicAccess: boolean;
```

- *Type:* boolean

Whether to block public access to VPCs.

Defaults to true.

---

##### `vpcBlockPublicAccessMode`<sup>Optional</sup> <a name="vpcBlockPublicAccessMode" id="advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccessMode"></a>

```typescript
public readonly vpcBlockPublicAccessMode: VpcBlockPublicAccessMode;
```

- *Type:* <a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode">VpcBlockPublicAccessMode</a>

The mode for blocking public access to VPCs.

---

### GuardDutyConstructProps <a name="GuardDutyConstructProps" id="advanced-cdk-constructs.GuardDutyConstructProps"></a>

Properties for configuring {@link GuardDutyConstruct}.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.GuardDutyConstructProps.Initializer"></a>

```typescript
import { GuardDutyConstructProps } from 'advanced-cdk-constructs'

const guardDutyConstructProps: GuardDutyConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.enableGuardDuty">enableGuardDuty</a></code> | <code>boolean</code> | Whether to enable GuardDuty. |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.kubernetesAuditLogs">kubernetesAuditLogs</a></code> | <code>boolean</code> | Whether to enable Kubernetes audit logs as a GuardDuty data source. |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.malwareProtection">malwareProtection</a></code> | <code>boolean</code> | Whether to enable malware protection (EC2 EBS volume scanning). |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.s3Logs">s3Logs</a></code> | <code>boolean</code> | Whether to enable S3 logs as a GuardDuty data source. |

---

##### `enableGuardDuty`<sup>Optional</sup> <a name="enableGuardDuty" id="advanced-cdk-constructs.GuardDutyConstructProps.property.enableGuardDuty"></a>

```typescript
public readonly enableGuardDuty: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable GuardDuty.

---

##### `kubernetesAuditLogs`<sup>Optional</sup> <a name="kubernetesAuditLogs" id="advanced-cdk-constructs.GuardDutyConstructProps.property.kubernetesAuditLogs"></a>

```typescript
public readonly kubernetesAuditLogs: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable Kubernetes audit logs as a GuardDuty data source.

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="advanced-cdk-constructs.GuardDutyConstructProps.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable malware protection (EC2 EBS volume scanning).

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="advanced-cdk-constructs.GuardDutyConstructProps.property.s3Logs"></a>

```typescript
public readonly s3Logs: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable S3 logs as a GuardDuty data source.

---

### OrganizationalUnit <a name="OrganizationalUnit" id="advanced-cdk-constructs.OrganizationalUnit"></a>

Represents an organizational unit within AWS Control Tower.

Organizational units (OUs) are containers for AWS accounts that help organize
and manage accounts based on business needs, security requirements, or other criteria.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.OrganizationalUnit.Initializer"></a>

```typescript
import { OrganizationalUnit } from 'advanced-cdk-constructs'

const organizationalUnit: OrganizationalUnit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.OrganizationalUnit.property.name">name</a></code> | <code>string</code> | The name of the organizational unit. |
| <code><a href="#advanced-cdk-constructs.OrganizationalUnit.property.description">description</a></code> | <code>string</code> | Optional description of the organizational unit's purpose. |

---

##### `name`<sup>Required</sup> <a name="name" id="advanced-cdk-constructs.OrganizationalUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the organizational unit.

---

##### `description`<sup>Optional</sup> <a name="description" id="advanced-cdk-constructs.OrganizationalUnit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description of the organizational unit's purpose.

---

### ResourceControlPolicyProps <a name="ResourceControlPolicyProps" id="advanced-cdk-constructs.ResourceControlPolicyProps"></a>

Properties for configuring a {@link ResourceControlPolicy}.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.ResourceControlPolicyProps.Initializer"></a>

```typescript
import { ResourceControlPolicyProps } from 'advanced-cdk-constructs'

const resourceControlPolicyProps: ResourceControlPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceConfusedDeputyProtection">enforceConfusedDeputyProtection</a></code> | <code>boolean</code> | Whether to enforce Confused Deputy Protection in the policy. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceSecureTransport">enforceSecureTransport</a></code> | <code>boolean</code> | Whether to enforce Secure Transport in the policy. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceOrgID">sourceOrgID</a></code> | <code>string</code> | The AWS Organization ID to enforce as the source organization in the policy. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | The list of target IDs (accounts, OUs, or roots) to which the policy will be attached. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.name">name</a></code> | <code>string</code> | The name of the resource control policy. |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceAccount">sourceAccount</a></code> | <code>string[]</code> | Optional list of allowed source AWS account IDs. |

---

##### `enforceConfusedDeputyProtection`<sup>Required</sup> <a name="enforceConfusedDeputyProtection" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceConfusedDeputyProtection"></a>

```typescript
public readonly enforceConfusedDeputyProtection: boolean;
```

- *Type:* boolean

Whether to enforce Confused Deputy Protection in the policy.

---

##### `enforceSecureTransport`<sup>Required</sup> <a name="enforceSecureTransport" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceSecureTransport"></a>

```typescript
public readonly enforceSecureTransport: boolean;
```

- *Type:* boolean

Whether to enforce Secure Transport in the policy.

---

##### `sourceOrgID`<sup>Required</sup> <a name="sourceOrgID" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceOrgID"></a>

```typescript
public readonly sourceOrgID: string;
```

- *Type:* string

The AWS Organization ID to enforce as the source organization in the policy.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

The list of target IDs (accounts, OUs, or roots) to which the policy will be attached.

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* Automatically generated name based on construct ID.

The name of the resource control policy.

If not provided, a default name will be generated.

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string[];
```

- *Type:* string[]

Optional list of allowed source AWS account IDs.

If provided, only these accounts are allowed as source accounts.

---

### ServiceControlPolicyProps <a name="ServiceControlPolicyProps" id="advanced-cdk-constructs.ServiceControlPolicyProps"></a>

Properties for defining a Service Control Policy.

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.ServiceControlPolicyProps.Initializer"></a>

```typescript
import { ServiceControlPolicyProps } from 'advanced-cdk-constructs'

const serviceControlPolicyProps: ServiceControlPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.statements">statements</a></code> | <code>any[]</code> | The policy statements to include in the Service Control Policy. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | The list of target IDs (accounts or organizational units) to which the policy will be attached. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.description">description</a></code> | <code>string</code> | The description of the Service Control Policy. |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.name">name</a></code> | <code>string</code> | The name of the Service Control Policy. |

---

##### `statements`<sup>Required</sup> <a name="statements" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.statements"></a>

```typescript
public readonly statements: any[];
```

- *Type:* any[]

The policy statements to include in the Service Control Policy.

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

The list of target IDs (accounts or organizational units) to which the policy will be attached.

---

##### `description`<sup>Optional</sup> <a name="description" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 'Service Control Policy from Advanced CDK Constructs'

The description of the Service Control Policy.

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* A name based on the construct ID will be used.

The name of the Service Control Policy.

---



## Enums <a name="Enums" id="Enums"></a>

### AllowedImagesState <a name="AllowedImagesState" id="advanced-cdk-constructs.AllowedImagesState"></a>

State for allowed images policy.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.AllowedImagesState.ENABLED">ENABLED</a></code> | Only allow images from specified providers. |
| <code><a href="#advanced-cdk-constructs.AllowedImagesState.AUDIT_MODE">AUDIT_MODE</a></code> | Audit mode for allowed images. |

---

##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.AllowedImagesState.ENABLED"></a>

Only allow images from specified providers.

---


##### `AUDIT_MODE` <a name="AUDIT_MODE" id="advanced-cdk-constructs.AllowedImagesState.AUDIT_MODE"></a>

Audit mode for allowed images.

---


### HttpEndpoint <a name="HttpEndpoint" id="advanced-cdk-constructs.HttpEndpoint"></a>

Options for IMDSv2 HttpEndpoint.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.NO_PREFERENCE">NO_PREFERENCE</a></code> | No preference for HttpEndpoint. |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.ENABLED">ENABLED</a></code> | Enable HttpEndpoint. |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.DISABLED">DISABLED</a></code> | Disable HttpEndpoint. |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.HttpEndpoint.NO_PREFERENCE"></a>

No preference for HttpEndpoint.

---


##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.HttpEndpoint.ENABLED"></a>

Enable HttpEndpoint.

---


##### `DISABLED` <a name="DISABLED" id="advanced-cdk-constructs.HttpEndpoint.DISABLED"></a>

Disable HttpEndpoint.

---


### HttpTokens <a name="HttpTokens" id="advanced-cdk-constructs.HttpTokens"></a>

Options for IMDSv2 HttpTokens requirement.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.HttpTokens.NO_PREFERENCE">NO_PREFERENCE</a></code> | No preference for HttpTokens. |
| <code><a href="#advanced-cdk-constructs.HttpTokens.REQUIRED">REQUIRED</a></code> | Require HttpTokens. |
| <code><a href="#advanced-cdk-constructs.HttpTokens.OPTIONAL">OPTIONAL</a></code> | HttpTokens are optional. |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.HttpTokens.NO_PREFERENCE"></a>

No preference for HttpTokens.

---


##### `REQUIRED` <a name="REQUIRED" id="advanced-cdk-constructs.HttpTokens.REQUIRED"></a>

Require HttpTokens.

---


##### `OPTIONAL` <a name="OPTIONAL" id="advanced-cdk-constructs.HttpTokens.OPTIONAL"></a>

HttpTokens are optional.

---


### ImageProvider <a name="ImageProvider" id="advanced-cdk-constructs.ImageProvider"></a>

Predefined image providers for allowed images policy.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AMAZON">AMAZON</a></code> | Amazon-provided images. |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AWS_MARKETPLACE">AWS_MARKETPLACE</a></code> | AWS Marketplace images. |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AWS_BACKUP_VAULT">AWS_BACKUP_VAULT</a></code> | AWS Backup Vault images. |

---

##### `AMAZON` <a name="AMAZON" id="advanced-cdk-constructs.ImageProvider.AMAZON"></a>

Amazon-provided images.

---


##### `AWS_MARKETPLACE` <a name="AWS_MARKETPLACE" id="advanced-cdk-constructs.ImageProvider.AWS_MARKETPLACE"></a>

AWS Marketplace images.

---


##### `AWS_BACKUP_VAULT` <a name="AWS_BACKUP_VAULT" id="advanced-cdk-constructs.ImageProvider.AWS_BACKUP_VAULT"></a>

AWS Backup Vault images.

---


### InstanceMetadataTags <a name="InstanceMetadataTags" id="advanced-cdk-constructs.InstanceMetadataTags"></a>

Options for IMDSv2 Instance Metadata Tags.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.NO_PREFERENCE">NO_PREFERENCE</a></code> | No preference for instance metadata tags. |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.ENABLED">ENABLED</a></code> | Enable instance metadata tags. |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.DISABLED">DISABLED</a></code> | Disable instance metadata tags. |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.InstanceMetadataTags.NO_PREFERENCE"></a>

No preference for instance metadata tags.

---


##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.InstanceMetadataTags.ENABLED"></a>

Enable instance metadata tags.

---


##### `DISABLED` <a name="DISABLED" id="advanced-cdk-constructs.InstanceMetadataTags.DISABLED"></a>

Disable instance metadata tags.

---


### SnapshotBlockPublicAccessState <a name="SnapshotBlockPublicAccessState" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState"></a>

State for blocking public access to EBS snapshots.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING">BLOCK_NEW_SHARING</a></code> | Block new sharing of snapshots. |
| <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING">BLOCK_ALL_SHARING</a></code> | Block all sharing of snapshots. |

---

##### `BLOCK_NEW_SHARING` <a name="BLOCK_NEW_SHARING" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING"></a>

Block new sharing of snapshots.

---


##### `BLOCK_ALL_SHARING` <a name="BLOCK_ALL_SHARING" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING"></a>

Block all sharing of snapshots.

---


### VpcBlockPublicAccessMode <a name="VpcBlockPublicAccessMode" id="advanced-cdk-constructs.VpcBlockPublicAccessMode"></a>

Modes for blocking public access to VPCs.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.OFF">OFF</a></code> | No blocking of public access. |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_INGRESS">BLOCK_INGRESS</a></code> | Block only ingress (incoming) public access. |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL">BLOCK_BIDIRECTIONAL</a></code> | Block both ingress and egress (bidirectional) public access. |

---

##### `OFF` <a name="OFF" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.OFF"></a>

No blocking of public access.

---


##### `BLOCK_INGRESS` <a name="BLOCK_INGRESS" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_INGRESS"></a>

Block only ingress (incoming) public access.

---


##### `BLOCK_BIDIRECTIONAL` <a name="BLOCK_BIDIRECTIONAL" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL"></a>

Block both ingress and egress (bidirectional) public access.

---

