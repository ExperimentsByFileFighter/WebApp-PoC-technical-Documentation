# Module: background/methods/sound

## Table of contents

### Functions

- [audioOnOff](../wiki/background.methods.sound#audioonoff)
- [pauseAudioByID](../wiki/background.methods.sound#pauseaudiobyid)
- [playAudioByID](../wiki/background.methods.sound#playaudiobyid)
- [setAudioVolumeByID](../wiki/background.methods.sound#setaudiovolumebyid)

## Functions

### audioOnOff

▸ **audioOnOff**(`audioID`): `void`

Toggles (Start/Stop) given HTML audio element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioID` | `string` | ID of the HTML audio player element |

#### Returns

`void`

#### Defined in

[src/background/methods/sound.js:31](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/sound.js#L31)

___

### pauseAudioByID

▸ **pauseAudioByID**(`audioID`): `void`

Pauses audio of given HTML **audio** element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioID` | `string` | ID of the HTML audio player element |

#### Returns

`void`

#### Defined in

[src/background/methods/sound.js:13](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/sound.js#L13)

___

### playAudioByID

▸ **playAudioByID**(`audioID`): `void`

Plays audio of given HTML **audio** element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioID` | `string` | ID of the HTML audio player element |

#### Returns

`void`

#### Defined in

[src/background/methods/sound.js:5](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/sound.js#L5)

___

### setAudioVolumeByID

▸ **setAudioVolumeByID**(`audioID`, `volume`): `void`

Sets audio volume of given HTML audio element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioID` | `string` | ID of the HTML audio player element |
| `volume` | `number` | new volume in between 0.0 to 1.0 |

#### Returns

`void`

#### Defined in

[src/background/methods/sound.js:22](https://github.com/ExperimentsByFileFighter/WebApp-PoC-technical-Documentation/blob/5171d3e/src/background/methods/sound.js#L22)
