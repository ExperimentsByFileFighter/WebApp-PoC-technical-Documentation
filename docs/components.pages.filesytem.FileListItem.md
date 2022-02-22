# Module: components/pages/filesytem/FileListItem

## Table of contents

### Properties

- [default](../wiki/components.pages.filesytem.FileListItem#default)

## Properties

### default

• **default**: `ConnectedComponent`<(`props`: `Props`) => `ReactElement`, `Omit`<{ `filesystem`: { `selectedFsEntities`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)[] = state.filesystem.selectedFsEntities }  } & { `addToSelected`: (`content`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)) => [`AddToSelected`](../wiki/background.redux.actions.filesystemTypes.AddToSelected) ; `removeFromSelected`: (`content`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)) => [`RemoveFromSelected`](../wiki/background.redux.actions.filesystemTypes.RemoveFromSelected)  } & { `fileListItem`: [`FsEntity`](../wiki/background.api.filesystemTypes.FsEntity)  }, ``"filesystem"`` \| ``"addToSelected"`` \| ``"removeFromSelected"``\>\>
