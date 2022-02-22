# Module: background/api/filesystem

## Table of contents

### Functions

- [createNewFolder](../wiki/background.api.filesystem#createnewfolder)
- [deleteFsEntities](../wiki/background.api.filesystem#deletefsentities)
- [getFolderContents](../wiki/background.api.filesystem#getfoldercontents)
- [searchFsEntities](../wiki/background.api.filesystem#searchfsentities)
- [uploadFiles](../wiki/background.api.filesystem#uploadfiles)
- [uploadPreflight](../wiki/background.api.filesystem#uploadpreflight)

## Functions

### createNewFolder

▸ **createNewFolder**(`folderName`, `parentFolderID`): `Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folderName` | `string` |
| `parentFolderID` | `string` |

#### Returns

`Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity), `any`\>\>

#### Defined in

[src/background/api/filesystem.ts:137](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L137)

___

### deleteFsEntities

▸ **deleteFsEntities**(`files`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] |

#### Returns

`void`

#### Defined in

[src/background/api/filesystem.ts:118](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L118)

___

### getFolderContents

▸ **getFolderContents**(`path`): `Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[], `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[], `any`\>\>

#### Defined in

[src/background/api/filesystem.ts:30](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L30)

___

### searchFsEntities

▸ **searchFsEntities**(`searchString`): `Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[], `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |

#### Returns

`Promise`<`AxiosResponse`<[`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[], `any`\>\>

#### Defined in

[src/background/api/filesystem.ts:153](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L153)

___

### uploadFiles

▸ **uploadFiles**(`files`, `parentFolderID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `File`[] \| [`EditableFileWithPreflightInfo`](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo)[] |
| `parentFolderID` | `string` |

#### Returns

`void`

#### Defined in

[src/background/api/filesystem.ts:69](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L69)

___

### uploadPreflight

▸ **uploadPreflight**(`files`, `parentFolderID`): `Promise`<[`PreflightEntity`](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `File`[] \| [`EditableFileWithPreflightInfo`](../wiki/components.pages.filesytem.upload.preflightTypes.EditableFileWithPreflightInfo)[] |
| `parentFolderID` | `string` |

#### Returns

`Promise`<[`PreflightEntity`](../wiki/components.pages.filesytem.upload.preflightTypes.PreflightEntity)[]\>

#### Defined in

[src/background/api/filesystem.ts:44](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/filesystem.ts#L44)
