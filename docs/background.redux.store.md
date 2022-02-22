# Module: background/redux/store

## Table of contents

### Type aliases

- [RootState](../wiki/background.redux.store#rootstate)

### Properties

- [default](../wiki/background.redux.store#default)

## Type aliases

### RootState

Ƭ **RootState**: `ReturnType`<typeof [`default`](../wiki/background.redux.reducers#default)\>

#### Defined in

[src/background/redux/store.tsx:6](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/store.tsx#L6)

## Properties

### default

• **default**: `Store`<`EmptyObject` & { `apiActions`: [`ApiActionsState`](../wiki/background.redux.actions.apiActionsTypes.ApiActionsState) ; `filesystem`: [`FilesystemState`](../wiki/background.redux.actions.filesystemTypes.FilesystemState) ; `tokens`: [`TokensState`](../wiki/background.redux.actions.tokenTypes.TokensState) ; `user`: [`UserState`](../wiki/background.redux.actions.userTypes.UserState)  }, [`TokenActionsTypes`](../wiki/background.redux.actions.tokenTypes#tokenactionstypes) \| [`UpdateUser`](../wiki/background.redux.actions.userTypes.UpdateUser) \| [`FilesystemActionTypes`](../wiki/background.redux.actions.filesystemTypes#filesystemactiontypes) \| [`ApiActionsTypes`](../wiki/background.redux.actions.apiActionsTypes#apiactionstypes)\>
