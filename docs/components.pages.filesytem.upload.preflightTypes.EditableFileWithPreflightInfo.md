# Interface: EditableFileWithPreflightInfo

[components/pages/filesytem/upload/preflightTypes](../wiki/components.pages.filesytem.upload.preflightTypes).EditableFileWithPreflightInfo

## Hierarchy

- `File`

- `EditableEntity`

- [`PreflightEntity`](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity)

  ↳ **`EditableFileWithPreflightInfo`**

## Table of contents

### Properties

- [error](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#error)
- [isFile](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#isfile)
- [lastModified](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#lastmodified)
- [name](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#name)
- [nameAlreadyInUse](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#namealreadyinuse)
- [nameIsValid](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#nameisvalid)
- [newName](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#newname)
- [newPath](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#newpath)
- [overwrite](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#overwrite)
- [path](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#path)
- [permissionIsSufficient](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#permissionissufficient)
- [prefNewName](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#prefnewname)
- [prefNewPath](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#prefnewpath)
- [size](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#size)
- [type](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#type)
- [webkitRelativePath](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#webkitrelativepath)

### Methods

- [arrayBuffer](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#arraybuffer)
- [slice](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#slice)
- [stream](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#stream)
- [text](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo#text)

## Properties

### error

• `Optional` **error**: [`EditableEntityError`](../wiki/components.pages.filesytem.upload.preflightTypes.EditableEntityError)

#### Inherited from

EditableEntity.error

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:32](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L32)

___

### isFile

• **isFile**: `boolean`

#### Inherited from

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[isFile](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#isfile)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:7](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L7)

___

### lastModified

• `Readonly` **lastModified**: `number`

#### Inherited from

File.lastModified

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5466

___

### name

• `Readonly` **name**: `string`

#### Overrides

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[name](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#name)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:19](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L19)

___

### nameAlreadyInUse

• **nameAlreadyInUse**: `boolean`

#### Inherited from

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[nameAlreadyInUse](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#namealreadyinuse)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:5](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L5)

___

### nameIsValid

• **nameIsValid**: `boolean`

#### Inherited from

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[nameIsValid](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#nameisvalid)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:6](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L6)

___

### newName

• `Optional` **newName**: `string`

#### Inherited from

EditableEntity.newName

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:27](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L27)

___

### newPath

• `Optional` **newPath**: `string`

#### Inherited from

EditableEntity.newPath

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:28](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L28)

___

### overwrite

• `Optional` **overwrite**: `boolean`

#### Inherited from

EditableEntity.overwrite

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:29](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L29)

___

### path

• **path**: `string`

#### Inherited from

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[path](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#path)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:3](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L3)

___

### permissionIsSufficient

• **permissionIsSufficient**: `boolean`

#### Inherited from

[PreflightEntity](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity).[permissionIsSufficient](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity#permissionissufficient)

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:4](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L4)

___

### prefNewName

• `Optional` **prefNewName**: `string`

#### Inherited from

EditableEntity.prefNewName

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:31](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L31)

___

### prefNewPath

• `Optional` **prefNewPath**: `string`

#### Inherited from

EditableEntity.prefNewPath

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:30](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L30)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

File.size

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2569

___

### type

• `Readonly` **type**: `string`

#### Inherited from

File.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2570

___

### webkitRelativePath

• `Optional` **webkitRelativePath**: `string`

#### Defined in

[src/components/pages/filesytem/upload/preflightTypes.ts:18](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/upload/preflightTypes.ts#L18)

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

File.arrayBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2571

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

File.arrayBuffer

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:9

___

### slice

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

File.slice

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2572

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

File.slice

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:10

___

### stream

▸ **stream**(): `ReadableStream`<`any`\>

#### Returns

`ReadableStream`<`any`\>

#### Inherited from

File.stream

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2573

▸ **stream**(): `ReadableStream`

#### Returns

`ReadableStream`

#### Inherited from

File.stream

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:11

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

File.text

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2574

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

File.text

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:12
