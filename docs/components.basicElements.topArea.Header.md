# Module: components/basicElements/topArea/Header

## Table of contents

### Interfaces

- [navBarElement\_Interface](../wiki/components.basicElements.topArea.Header.navBarElement_Interface)

### Properties

- [default](../wiki/components.basicElements.topArea.Header#default)

### Functions

- [Header](../wiki/components.basicElements.topArea.Header#header)

## Properties

### default

• **default**: `ConnectedComponent`<(`props`: { `groups`: `string`[] = state.user.groups; `username`: ``null`` \| `string` = state.user.username } & `DispatchProp`<`AnyAction`\>) => `ReactElement`, `Omit`<{ `groups`: `string`[] = state.user.groups; `username`: ``null`` \| `string` = state.user.username } & `DispatchProp`<`AnyAction`\>, ``"username"`` \| ``"groups"`` \| ``"dispatch"``\>\>

## Functions

### Header

▸ **Header**(`props`): `ReactElement`

**`component`**
Contains the NavBar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | { `groups`: `string`[] = state.user.groups; `username`: ``null`` \| `string` = state.user.username } & `DispatchProp`<`AnyAction`\> | extracted from Redux |

#### Returns

`ReactElement`

#### Defined in

[src/components/basicElements/topArea/Header.tsx:38](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/components/basicElements/topArea/Header.tsx#L38)
