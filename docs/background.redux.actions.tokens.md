# Module: background/redux/actions/tokens

## Table of contents

### Functions

- [addAccessToken](../wiki/background.redux.actions.tokens#addaccesstoken)
- [addRefreshToken](../wiki/background.redux.actions.tokens#addrefreshtoken)
- [checkedCookies](../wiki/background.redux.actions.tokens#checkedcookies)
- [removeTokens](../wiki/background.redux.actions.tokens#removetokens)

## Functions

### addAccessToken

▸ **addAccessToken**(`content`): [`AddAccessToken`](../wiki/background.redux.actions.tokenTypes.AddAccessToken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`AccessToken`](../wiki/background.redux.actions.tokenTypes.AccessToken) |

#### Returns

[`AddAccessToken`](../wiki/background.redux.actions.tokenTypes.AddAccessToken)

#### Defined in

[src/background/redux/actions/tokens.tsx:19](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/tokens.tsx#L19)

___

### addRefreshToken

▸ **addRefreshToken**(`content`): [`AddRefreshToken`](../wiki/background.redux.actions.tokenTypes.AddRefreshToken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`AddRefreshToken`](../wiki/background.redux.actions.tokenTypes.AddRefreshToken)

#### Defined in

[src/background/redux/actions/tokens.tsx:14](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/tokens.tsx#L14)

___

### checkedCookies

▸ **checkedCookies**(`content`): [`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`CookieStatus`](../wiki/background.redux.actions.tokenTypes.CookieStatus) |

#### Returns

[`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)

#### Defined in

[src/background/redux/actions/tokens.tsx:28](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/tokens.tsx#L28)

___

### removeTokens

▸ **removeTokens**(): [`RemoveTokens`](../wiki/background.redux.actions.tokenTypes.RemoveTokens)

#### Returns

[`RemoveTokens`](../wiki/background.redux.actions.tokenTypes.RemoveTokens)

#### Defined in

[src/background/redux/actions/tokens.tsx:24](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/redux/actions/tokens.tsx#L24)
