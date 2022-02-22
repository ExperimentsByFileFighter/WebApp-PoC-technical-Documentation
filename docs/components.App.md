# Module: components/App

## Table of contents

### Properties

- [default](../wiki/components.App#default)

## Properties

### default

• **default**: `ConnectedComponent`<(`props`: { `tokens`: { `accessToken`: ``null`` \| [`AccessToken`](../wiki/background.redux.actions.tokenTypes.AccessToken) = state.tokens.accessToken; `checkedCookies`: `number` = state.tokens.checkedCookies; `refreshToken`: ``null`` \| `string` = state.tokens.refreshToken } ; `user`: [`UserState`](../wiki/background.redux.actions.userTypes.UserState) = state.user } & { `addAccessToken`: (`content`: [`AccessToken`](../wiki/background.redux.actions.tokenTypes.AccessToken)) => [`AddAccessToken`](../wiki/background.redux.actions.tokenTypes.AddAccessToken) ; `addRefreshToken`: (`content`: `string`) => [`AddRefreshToken`](../wiki/background.redux.actions.tokenTypes.AddRefreshToken) ; `checkedCookies`: (`content`: [`CookieStatus`](../wiki/background.redux.actions.tokenTypes.CookieStatus)) => [`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)  }) => `ReactElement`, `Omit`<{ `tokens`: { `accessToken`: ``null`` \| [`AccessToken`](../wiki/background.redux.actions.tokenTypes.AccessToken) = state.tokens.accessToken; `checkedCookies`: `number` = state.tokens.checkedCookies; `refreshToken`: ``null`` \| `string` = state.tokens.refreshToken } ; `user`: [`UserState`](../wiki/background.redux.actions.userTypes.UserState) = state.user } & { `addAccessToken`: (`content`: [`AccessToken`](../wiki/background.redux.actions.tokenTypes.AccessToken)) => [`AddAccessToken`](../wiki/background.redux.actions.tokenTypes.AddAccessToken) ; `addRefreshToken`: (`content`: `string`) => [`AddRefreshToken`](../wiki/background.redux.actions.tokenTypes.AddRefreshToken) ; `checkedCookies`: (`content`: [`CookieStatus`](../wiki/background.redux.actions.tokenTypes.CookieStatus)) => [`CheckedCookies`](../wiki/background.redux.actions.tokenTypes.CheckedCookies)  }, ``"tokens"`` \| ``"user"`` \| ``"addRefreshToken"`` \| ``"addAccessToken"`` \| ``"checkedCookies"``\>\>
