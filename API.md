# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuardDutyConstruct <a name="GuardDutyConstruct" id="advanced-cdk-constructs.GuardDutyConstruct"></a>

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer"></a>

```typescript
import { GuardDutyConstruct } from 'advanced-cdk-constructs'

new GuardDutyConstruct(scope: Construct, id: string, props?: GuardDutyConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps">GuardDutyConstructProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="advanced-cdk-constructs.GuardDutyConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.GuardDutyConstructProps">GuardDutyConstructProps</a>

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
| <code><a href="#advanced-cdk-constructs.GuardDutyConstruct.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |

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

---


### ResourceControlPolicy <a name="ResourceControlPolicy" id="advanced-cdk-constructs.ResourceControlPolicy"></a>

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer"></a>

```typescript
import { ResourceControlPolicy } from 'advanced-cdk-constructs'

new ResourceControlPolicy(scope: Construct, id: string, props: ResourceControlPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps">ResourceControlPolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.ResourceControlPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.ResourceControlPolicyProps">ResourceControlPolicyProps</a>

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
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicy.property.resourceControlPolicyArn">resourceControlPolicyArn</a></code> | <code>string</code> | *No description.* |

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

---


## Structs <a name="Structs" id="Structs"></a>

### GuardDutyConstructProps <a name="GuardDutyConstructProps" id="advanced-cdk-constructs.GuardDutyConstructProps"></a>

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.GuardDutyConstructProps.Initializer"></a>

```typescript
import { GuardDutyConstructProps } from 'advanced-cdk-constructs'

const guardDutyConstructProps: GuardDutyConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.enableGuardDuty">enableGuardDuty</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.kubernetesAuditLogs">kubernetesAuditLogs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.malwareProtection">malwareProtection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.GuardDutyConstructProps.property.s3Logs">s3Logs</a></code> | <code>boolean</code> | *No description.* |

---

##### `enableGuardDuty`<sup>Optional</sup> <a name="enableGuardDuty" id="advanced-cdk-constructs.GuardDutyConstructProps.property.enableGuardDuty"></a>

```typescript
public readonly enableGuardDuty: boolean;
```

- *Type:* boolean

---

##### `kubernetesAuditLogs`<sup>Optional</sup> <a name="kubernetesAuditLogs" id="advanced-cdk-constructs.GuardDutyConstructProps.property.kubernetesAuditLogs"></a>

```typescript
public readonly kubernetesAuditLogs: boolean;
```

- *Type:* boolean

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="advanced-cdk-constructs.GuardDutyConstructProps.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: boolean;
```

- *Type:* boolean

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="advanced-cdk-constructs.GuardDutyConstructProps.property.s3Logs"></a>

```typescript
public readonly s3Logs: boolean;
```

- *Type:* boolean

---

### ResourceControlPolicyProps <a name="ResourceControlPolicyProps" id="advanced-cdk-constructs.ResourceControlPolicyProps"></a>

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.ResourceControlPolicyProps.Initializer"></a>

```typescript
import { ResourceControlPolicyProps } from 'advanced-cdk-constructs'

const resourceControlPolicyProps: ResourceControlPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceConfusedDeputyProtection">enforceConfusedDeputyProtection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceSecureTransport">enforceSecureTransport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceOrgID">sourceOrgID</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceAccount">sourceAccount</a></code> | <code>string[]</code> | *No description.* |

---

##### `enforceConfusedDeputyProtection`<sup>Required</sup> <a name="enforceConfusedDeputyProtection" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceConfusedDeputyProtection"></a>

```typescript
public readonly enforceConfusedDeputyProtection: boolean;
```

- *Type:* boolean

---

##### `enforceSecureTransport`<sup>Required</sup> <a name="enforceSecureTransport" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.enforceSecureTransport"></a>

```typescript
public readonly enforceSecureTransport: boolean;
```

- *Type:* boolean

---

##### `sourceOrgID`<sup>Required</sup> <a name="sourceOrgID" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceOrgID"></a>

```typescript
public readonly sourceOrgID: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="advanced-cdk-constructs.ResourceControlPolicyProps.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string[];
```

- *Type:* string[]

---



