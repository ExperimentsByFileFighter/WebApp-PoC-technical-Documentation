# Module: background/redux/actions/filesystem

## Table of contents

### Functions

- [addToContents](../wiki/background.redux.actions.filesystem#addtocontents)
- [addToSelected](../wiki/background.redux.actions.filesystem#addtoselected)
- [clearSelected](../wiki/background.redux.actions.filesystem#clearselected)
- [removeFromContents](../wiki/background.redux.actions.filesystem#removefromcontents)
- [removeFromSelected](../wiki/background.redux.actions.filesystem#removefromselected)
- [replaceSelected](../wiki/background.redux.actions.filesystem#replaceselected)
- [setContents](../wiki/background.redux.actions.filesystem#setcontents)
- [setCurrentFsItemId](../wiki/background.redux.actions.filesystem#setcurrentfsitemid)
- [setCurrentPath](../wiki/background.redux.actions.filesystem#setcurrentpath)

## Functions

### addToContents

▸ **addToContents**(`content`): [`AddToContents`](../wiki/background.redux.actions.filesystemTypes.AddToContents)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity) |

#### Returns

[`AddToContents`](../wiki/background.redux.actions.filesystemTypes.AddToContents)

#### Defined in

[src/background/redux/actions/filesystem.ts:47](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L47)

___

### addToSelected

▸ **addToSelected**(`content`): [`AddToSelected`](../wiki/background.redux.actions.filesystemTypes.AddToSelected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity) |

#### Returns

[`AddToSelected`](../wiki/background.redux.actions.filesystemTypes.AddToSelected)

#### Defined in

[src/background/redux/actions/filesystem.ts:23](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L23)

___

### clearSelected

▸ **clearSelected**(): [`ClearSelected`](../wiki/background.redux.actions.filesystemTypes.ClearSelected)

#### Returns

[`ClearSelected`](../wiki/background.redux.actions.filesystemTypes.ClearSelected)

#### Defined in

[src/background/redux/actions/filesystem.ts:33](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L33)

___

### removeFromContents

▸ **removeFromContents**(`content`): [`RemoveFromContents`](../wiki/background.redux.actions.filesystemTypes.RemoveFromContents)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity) |

#### Returns

[`RemoveFromContents`](../wiki/background.redux.actions.filesystemTypes.RemoveFromContents)

#### Defined in

[src/background/redux/actions/filesystem.ts:52](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L52)

___

### removeFromSelected

▸ **removeFromSelected**(`content`): [`RemoveFromSelected`](../wiki/background.redux.actions.filesystemTypes.RemoveFromSelected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity) |

#### Returns

[`RemoveFromSelected`](../wiki/background.redux.actions.filesystemTypes.RemoveFromSelected)

#### Defined in

[src/background/redux/actions/filesystem.ts:28](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L28)

___

### replaceSelected

▸ **replaceSelected**(`content`): [`ReplaceSelected`](../wiki/background.redux.actions.filesystemTypes.ReplaceSelected)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] |

#### Returns

[`ReplaceSelected`](../wiki/background.redux.actions.filesystemTypes.ReplaceSelected)

#### Defined in

[src/background/redux/actions/filesystem.ts:37](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L37)

___

### setContents

▸ **setContents**(`content`): [`SetContents`](../wiki/background.redux.actions.filesystemTypes.SetContents)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] |

#### Returns

[`SetContents`](../wiki/background.redux.actions.filesystemTypes.SetContents)

#### Defined in

[src/background/redux/actions/filesystem.ts:42](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L42)

___

### setCurrentFsItemId

▸ **setCurrentFsItemId**(`content`): [`SetCurrentFsItemId`](../wiki/background.redux.actions.filesystemTypes.SetCurrentFsItemId)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`SetCurrentFsItemId`](../wiki/background.redux.actions.filesystemTypes.SetCurrentFsItemId)

#### Defined in

[src/background/redux/actions/filesystem.ts:57](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L57)

___

### setCurrentPath

▸ **setCurrentPath**(`content`): [`SetCurrentPath`](../wiki/background.redux.actions.filesystemTypes.SetCurrentPath)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`SetCurrentPath`](../wiki/background.redux.actions.filesystemTypes.SetCurrentPath)

#### Defined in

[src/background/redux/actions/filesystem.ts:62](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/filesystem.ts#L62)
