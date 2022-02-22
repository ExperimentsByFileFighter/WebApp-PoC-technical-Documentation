# Module: background/methods/redirect

## Table of contents

### Functions

- [redirect](../wiki/background.methods.redirect#redirect)
- [scrollToElement](../wiki/background.methods.redirect#scrolltoelement)

## Functions

### redirect

▸ **redirect**(`history`, `path`, `event?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `history` | `Object` |
| `history.push` | (`path`: `string`) => `void` |
| `path` | `string` |
| `event?` | `Object` |
| `event.preventDefault` | () => `void` |

#### Returns

`void`

#### Defined in

[src/background/methods/redirect.ts:14](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/redirect.ts#L14)

___

### scrollToElement

▸ **scrollToElement**(`history`, `id`, `event?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `history` | `Object` |
| `history.push` | (`path`: `string`) => `void` |
| `id` | `string` |
| `event?` | `Object` |
| `event.preventDefault` | () => `void` |

#### Returns

`void`

#### Defined in

[src/background/methods/redirect.ts:1](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/redirect.ts#L1)
