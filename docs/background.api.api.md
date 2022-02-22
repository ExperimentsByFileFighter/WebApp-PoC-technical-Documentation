# Module: background/api/api

## Table of contents

### Enumerations

- [DataIntegrity](../wiki/background.api.api.DataIntegrity)

### Interfaces

- [SystemHealthData](../wiki/background.api.api.SystemHealthData)

### Variables

- [filesystemPath](../wiki/background.api.api#filesystempath)
- [hostname](../wiki/background.api.api#hostname)
- [userPath](../wiki/background.api.api#userpath)

### Functions

- [callBackendHealth](../wiki/background.api.api#callbackendhealth)

## Variables

### filesystemPath

• `Const` **filesystemPath**: `string` = `"/v1/filesystem/"`

#### Defined in

[src/background/api/api.ts:8](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/api.ts#L8)

___

### hostname

• `Const` **hostname**: `string` = `constants.url.API_URL`

#### Defined in

[src/background/api/api.ts:4](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/api.ts#L4)

___

### userPath

• `Const` **userPath**: `string` = `"/v1/users"`

#### Defined in

[src/background/api/api.ts:6](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/api.ts#L6)

## Functions

### callBackendHealth

▸ **callBackendHealth**(): `Promise`<[`SystemHealthData`](../wiki/background.api.api.SystemHealthData)\>

#### Returns

`Promise`<[`SystemHealthData`](../wiki/background.api.api.SystemHealthData)\>

#### Defined in

[src/background/api/api.ts:25](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/api/api.ts#L25)
