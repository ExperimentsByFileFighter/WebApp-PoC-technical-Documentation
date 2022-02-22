# Module: background/api/auth

## Table of contents

### Interfaces

- [BackendAuthData](../wiki/background.api.auth.BackendAuthData)
- [BackendLoginData](../wiki/background.api.auth.BackendLoginData)

### Functions

- [checkForCookie](../wiki/background.api.auth#checkforcookie)
- [getAccessTokenWithRefreshToken](../wiki/background.api.auth#getaccesstokenwithrefreshtoken)
- [loginWithUsernameAndPassword](../wiki/background.api.auth#loginwithusernameandpassword)
- [logout](../wiki/background.api.auth#logout)

## Functions

### checkForCookie

▸ **checkForCookie**(): `undefined` \| [`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)

#### Returns

`undefined` \| [`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)

#### Defined in

[src/background/api/auth.ts:33](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/auth.ts#L33)

___

### getAccessTokenWithRefreshToken

▸ **getAccessTokenWithRefreshToken**(): `void`

#### Returns

`void`

#### Defined in

[src/background/api/auth.ts:79](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/auth.ts#L79)

___

### loginWithUsernameAndPassword

▸ **loginWithUsernameAndPassword**(`userName`, `password`, `stayLoggedIn`): `Promise`<[`BackendLoginData`](../wiki/background.api.auth.BackendLoginData)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userName` | `string` |
| `password` | `string` |
| `stayLoggedIn` | `boolean` |

#### Returns

`Promise`<[`BackendLoginData`](../wiki/background.api.auth.BackendLoginData)\>

#### Defined in

[src/background/api/auth.ts:44](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/auth.ts#L44)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

[src/background/api/auth.ts:124](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/auth.ts#L124)
