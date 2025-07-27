# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeclarativePolicy <a name="DeclarativePolicy" id="advanced-cdk-constructs.DeclarativePolicy"></a>

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.DeclarativePolicy.Initializer"></a>

```typescript
import { DeclarativePolicy } from 'advanced-cdk-constructs'

new DeclarativePolicy(scope: Construct, id: string, props: DeclarativePolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps">DeclarativePolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.DeclarativePolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.DeclarativePolicyProps">DeclarativePolicyProps</a>

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
| <code><a href="#advanced-cdk-constructs.DeclarativePolicy.property.declarativePolicyArn">declarativePolicyArn</a></code> | <code>string</code> | *No description.* |

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

---


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


### ServiceControlPolicy <a name="ServiceControlPolicy" id="advanced-cdk-constructs.ServiceControlPolicy"></a>

#### Initializers <a name="Initializers" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer"></a>

```typescript
import { ServiceControlPolicy } from 'advanced-cdk-constructs'

new ServiceControlPolicy(scope: Construct, id: string, props: ServiceControlPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps">ServiceControlPolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="advanced-cdk-constructs.ServiceControlPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#advanced-cdk-constructs.ServiceControlPolicyProps">ServiceControlPolicyProps</a>

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
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicy.property.serviceControlPolicyArn">serviceControlPolicyArn</a></code> | <code>string</code> | *No description.* |

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

---


## Structs <a name="Structs" id="Structs"></a>

### DeclarativePolicyProps <a name="DeclarativePolicyProps" id="advanced-cdk-constructs.DeclarativePolicyProps"></a>

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.DeclarativePolicyProps.Initializer"></a>

```typescript
import { DeclarativePolicyProps } from 'advanced-cdk-constructs'

const declarativePolicyProps: DeclarativePolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImageProviders">allowedImageProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImagesState">allowedImagesState</a></code> | <code><a href="#advanced-cdk-constructs.AllowedImagesState">AllowedImagesState</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.blockPublicSnapshots">blockPublicSnapshots</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.disableSerialConsoleAccess">disableSerialConsoleAccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#advanced-cdk-constructs.HttpEndpoint">HttpEndpoint</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.httpTokens">httpTokens</a></code> | <code><a href="#advanced-cdk-constructs.HttpTokens">HttpTokens</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.imageBlockPublicAccess">imageBlockPublicAccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataDefaults">instanceMetadataDefaults</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code><a href="#advanced-cdk-constructs.InstanceMetadataTags">InstanceMetadataTags</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.restrictImageProviders">restrictImageProviders</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.snapshotBlockPublicAccessState">snapshotBlockPublicAccessState</a></code> | <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState">SnapshotBlockPublicAccessState</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccess">vpcBlockPublicAccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccessMode">vpcBlockPublicAccessMode</a></code> | <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode">VpcBlockPublicAccessMode</a></code> | *No description.* |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.DeclarativePolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `allowedImageProviders`<sup>Optional</sup> <a name="allowedImageProviders" id="advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImageProviders"></a>

```typescript
public readonly allowedImageProviders: string[];
```

- *Type:* string[]

---

##### `allowedImagesState`<sup>Optional</sup> <a name="allowedImagesState" id="advanced-cdk-constructs.DeclarativePolicyProps.property.allowedImagesState"></a>

```typescript
public readonly allowedImagesState: AllowedImagesState;
```

- *Type:* <a href="#advanced-cdk-constructs.AllowedImagesState">AllowedImagesState</a>

---

##### `blockPublicSnapshots`<sup>Optional</sup> <a name="blockPublicSnapshots" id="advanced-cdk-constructs.DeclarativePolicyProps.property.blockPublicSnapshots"></a>

```typescript
public readonly blockPublicSnapshots: boolean;
```

- *Type:* boolean

---

##### `description`<sup>Optional</sup> <a name="description" id="advanced-cdk-constructs.DeclarativePolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableSerialConsoleAccess`<sup>Optional</sup> <a name="disableSerialConsoleAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.disableSerialConsoleAccess"></a>

```typescript
public readonly disableSerialConsoleAccess: boolean;
```

- *Type:* boolean

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: HttpEndpoint;
```

- *Type:* <a href="#advanced-cdk-constructs.HttpEndpoint">HttpEndpoint</a>

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="advanced-cdk-constructs.DeclarativePolicyProps.property.httpTokens"></a>

```typescript
public readonly httpTokens: HttpTokens;
```

- *Type:* <a href="#advanced-cdk-constructs.HttpTokens">HttpTokens</a>

---

##### `imageBlockPublicAccess`<sup>Optional</sup> <a name="imageBlockPublicAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.imageBlockPublicAccess"></a>

```typescript
public readonly imageBlockPublicAccess: boolean;
```

- *Type:* boolean

---

##### `instanceMetadataDefaults`<sup>Optional</sup> <a name="instanceMetadataDefaults" id="advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataDefaults"></a>

```typescript
public readonly instanceMetadataDefaults: boolean;
```

- *Type:* boolean

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="advanced-cdk-constructs.DeclarativePolicyProps.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: InstanceMetadataTags;
```

- *Type:* <a href="#advanced-cdk-constructs.InstanceMetadataTags">InstanceMetadataTags</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.DeclarativePolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restrictImageProviders`<sup>Optional</sup> <a name="restrictImageProviders" id="advanced-cdk-constructs.DeclarativePolicyProps.property.restrictImageProviders"></a>

```typescript
public readonly restrictImageProviders: boolean;
```

- *Type:* boolean

---

##### `snapshotBlockPublicAccessState`<sup>Optional</sup> <a name="snapshotBlockPublicAccessState" id="advanced-cdk-constructs.DeclarativePolicyProps.property.snapshotBlockPublicAccessState"></a>

```typescript
public readonly snapshotBlockPublicAccessState: SnapshotBlockPublicAccessState;
```

- *Type:* <a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState">SnapshotBlockPublicAccessState</a>

---

##### `vpcBlockPublicAccess`<sup>Optional</sup> <a name="vpcBlockPublicAccess" id="advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccess"></a>

```typescript
public readonly vpcBlockPublicAccess: boolean;
```

- *Type:* boolean

---

##### `vpcBlockPublicAccessMode`<sup>Optional</sup> <a name="vpcBlockPublicAccessMode" id="advanced-cdk-constructs.DeclarativePolicyProps.property.vpcBlockPublicAccessMode"></a>

```typescript
public readonly vpcBlockPublicAccessMode: VpcBlockPublicAccessMode;
```

- *Type:* <a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode">VpcBlockPublicAccessMode</a>

---

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

### ServiceControlPolicyProps <a name="ServiceControlPolicyProps" id="advanced-cdk-constructs.ServiceControlPolicyProps"></a>

#### Initializer <a name="Initializer" id="advanced-cdk-constructs.ServiceControlPolicyProps.Initializer"></a>

```typescript
import { ServiceControlPolicyProps } from 'advanced-cdk-constructs'

const serviceControlPolicyProps: ServiceControlPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.statements">statements</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ServiceControlPolicyProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `statements`<sup>Required</sup> <a name="statements" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.statements"></a>

```typescript
public readonly statements: any[];
```

- *Type:* any[]

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="advanced-cdk-constructs.ServiceControlPolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### AllowedImagesState <a name="AllowedImagesState" id="advanced-cdk-constructs.AllowedImagesState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.AllowedImagesState.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.AllowedImagesState.AUDIT_MODE">AUDIT_MODE</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.AllowedImagesState.ENABLED"></a>

---


##### `AUDIT_MODE` <a name="AUDIT_MODE" id="advanced-cdk-constructs.AllowedImagesState.AUDIT_MODE"></a>

---


### HttpEndpoint <a name="HttpEndpoint" id="advanced-cdk-constructs.HttpEndpoint"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.NO_PREFERENCE">NO_PREFERENCE</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.HttpEndpoint.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.HttpEndpoint.NO_PREFERENCE"></a>

---


##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.HttpEndpoint.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="advanced-cdk-constructs.HttpEndpoint.DISABLED"></a>

---


### HttpTokens <a name="HttpTokens" id="advanced-cdk-constructs.HttpTokens"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.HttpTokens.NO_PREFERENCE">NO_PREFERENCE</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.HttpTokens.REQUIRED">REQUIRED</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.HttpTokens.OPTIONAL">OPTIONAL</a></code> | *No description.* |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.HttpTokens.NO_PREFERENCE"></a>

---


##### `REQUIRED` <a name="REQUIRED" id="advanced-cdk-constructs.HttpTokens.REQUIRED"></a>

---


##### `OPTIONAL` <a name="OPTIONAL" id="advanced-cdk-constructs.HttpTokens.OPTIONAL"></a>

---


### ImageProvider <a name="ImageProvider" id="advanced-cdk-constructs.ImageProvider"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AMAZON">AMAZON</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AWS_MARKETPLACE">AWS_MARKETPLACE</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.ImageProvider.AWS_BACKUP_VAULT">AWS_BACKUP_VAULT</a></code> | *No description.* |

---

##### `AMAZON` <a name="AMAZON" id="advanced-cdk-constructs.ImageProvider.AMAZON"></a>

---


##### `AWS_MARKETPLACE` <a name="AWS_MARKETPLACE" id="advanced-cdk-constructs.ImageProvider.AWS_MARKETPLACE"></a>

---


##### `AWS_BACKUP_VAULT` <a name="AWS_BACKUP_VAULT" id="advanced-cdk-constructs.ImageProvider.AWS_BACKUP_VAULT"></a>

---


### InstanceMetadataTags <a name="InstanceMetadataTags" id="advanced-cdk-constructs.InstanceMetadataTags"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.NO_PREFERENCE">NO_PREFERENCE</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.InstanceMetadataTags.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `NO_PREFERENCE` <a name="NO_PREFERENCE" id="advanced-cdk-constructs.InstanceMetadataTags.NO_PREFERENCE"></a>

---


##### `ENABLED` <a name="ENABLED" id="advanced-cdk-constructs.InstanceMetadataTags.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="advanced-cdk-constructs.InstanceMetadataTags.DISABLED"></a>

---


### SnapshotBlockPublicAccessState <a name="SnapshotBlockPublicAccessState" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING">BLOCK_NEW_SHARING</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING">BLOCK_ALL_SHARING</a></code> | *No description.* |

---

##### `BLOCK_NEW_SHARING` <a name="BLOCK_NEW_SHARING" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_NEW_SHARING"></a>

---


##### `BLOCK_ALL_SHARING` <a name="BLOCK_ALL_SHARING" id="advanced-cdk-constructs.SnapshotBlockPublicAccessState.BLOCK_ALL_SHARING"></a>

---


### VpcBlockPublicAccessMode <a name="VpcBlockPublicAccessMode" id="advanced-cdk-constructs.VpcBlockPublicAccessMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.OFF">OFF</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_INGRESS">BLOCK_INGRESS</a></code> | *No description.* |
| <code><a href="#advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL">BLOCK_BIDIRECTIONAL</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.OFF"></a>

---


##### `BLOCK_INGRESS` <a name="BLOCK_INGRESS" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_INGRESS"></a>

---


##### `BLOCK_BIDIRECTIONAL` <a name="BLOCK_BIDIRECTIONAL" id="advanced-cdk-constructs.VpcBlockPublicAccessMode.BLOCK_BIDIRECTIONAL"></a>

---

