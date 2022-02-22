# Module: components/pages/filesytem/FileList

## Table of contents

### Properties

- [default](../wiki/components.pages.filesytem.FileList#default)

## Properties

### default

• **default**: `ConnectedComponent`<(`props`: `reduxProps`) => `ReactElement`, `Omit`<{ `filesystem`: { `currentFsItemId`: `string` = state.filesystem.currentFsItemId; `currentPath`: `string` = state.filesystem.currentPath; `folderContents`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.folderContents; `selectedFsEntities`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.selectedFsEntities }  } & { `addToSelected`: (`content`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)) => [`AddToSelected`](../wiki/background.redux.actions.filesystemTypes.AddToSelected) ; `clearSelected`: () => [`ClearSelected`](../wiki/background.redux.actions.filesystemTypes.ClearSelected) ; `setContents`: (`content`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[]) => [`SetContents`](../wiki/background.redux.actions.filesystemTypes.SetContents) ; `setCurrentFsItemId`: (`content`: `string`) => [`SetCurrentFsItemId`](../wiki/background.redux.actions.filesystemTypes.SetCurrentFsItemId) ; `setCurrentPath`: (`content`: `string`) => [`SetCurrentPath`](../wiki/background.redux.actions.filesystemTypes.SetCurrentPath)  }, ``"filesystem"`` \| ``"addToSelected"`` \| ``"clearSelected"`` \| ``"setContents"`` \| ``"setCurrentFsItemId"`` \| ``"setCurrentPath"``\>\>
