# Module: components/pages/filesytem/FileListHeader

## Table of contents

### Properties

- [default](../wiki/components.pages.filesytem.FileListHeader#default)

### Functions

- [mapState](../wiki/components.pages.filesytem.FileListHeader#mapstate)

## Properties

### default

• **default**: `ConnectedComponent`<(`props`: `TReduxProps`) => `ReactElement`, `Omit`<{ `filesystem`: { `currentFsItemId`: `string` = state.filesystem.currentFsItemId; `folderContents`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.folderContents; `selectedFsEntities`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.selectedFsEntities }  } & { `clearSelected`: () => [`ClearSelected`](../wiki/background.redux.actions.filesystemTypes.ClearSelected) ; `replaceSelected`: (`content`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[]) => [`ReplaceSelected`](../wiki/background.redux.actions.filesystemTypes.ReplaceSelected)  } & `FileListHeaderInterface`, ``"filesystem"`` \| ``"clearSelected"`` \| ``"replaceSelected"``\>\>

## Functions

### mapState

▸ **mapState**(`state`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`SystemState`](../wiki/background.redux.actions.sytemState.SystemState) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `filesystem` | { `currentFsItemId`: `string` = state.filesystem.currentFsItemId; `folderContents`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.folderContents; `selectedFsEntities`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.selectedFsEntities } |
| `filesystem.currentFsItemId` | `string` |
| `filesystem.folderContents` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] |
| `filesystem.selectedFsEntities` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] |

#### Defined in

[src/components/pages/filesytem/FileListHeader.tsx:19](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/pages/filesytem/FileListHeader.tsx#L19)
