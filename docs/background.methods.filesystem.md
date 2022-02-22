# Module: background/methods/filesystem

## Table of contents

### Functions

- [getFileExtension](../wiki/background.methods.filesystem#getfileextension)
- [getPathWithoutName](../wiki/background.methods.filesystem#getpathwithoutname)
- [isFileNameValid](../wiki/background.methods.filesystem#isfilenamevalid)
- [isFsEntityInFolder](../wiki/background.methods.filesystem#isfsentityinfolder)
- [removeLeadingBackslash](../wiki/background.methods.filesystem#removeleadingbackslash)
- [removeTrailingBackslash](../wiki/background.methods.filesystem#removetrailingbackslash)

## Functions

### getFileExtension

▸ **getFileExtension**(`fileName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |

#### Returns

`string`

#### Defined in

[src/background/methods/filesystem.ts:32](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L32)

___

### getPathWithoutName

▸ **getPathWithoutName**(`pathWithName`, `name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathWithName` | `string` |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/background/methods/filesystem.ts:4](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L4)

___

### isFileNameValid

▸ **isFileNameValid**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/background/methods/filesystem.ts:37](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L37)

___

### isFsEntityInFolder

▸ **isFsEntityInFolder**(`fsEntity`, `path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fsEntity` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity) |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

[src/background/methods/filesystem.ts:25](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L25)

___

### removeLeadingBackslash

▸ **removeLeadingBackslash**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[src/background/methods/filesystem.ts:18](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L18)

___

### removeTrailingBackslash

▸ **removeTrailingBackslash**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[src/background/methods/filesystem.ts:11](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/filesystem.ts#L11)
