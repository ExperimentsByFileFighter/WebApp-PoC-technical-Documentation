/**
 * Plays audio of given HTML **audio** element
 * @param {string} audioID ID of the HTML audio player element
 */
function playAudioByID(audioID) {
    document.getElementById(audioID).play()
}

/**
 * Pauses audio of given HTML **audio** element
 * @param {string} audioID ID of the HTML audio player element
 */
function pauseAudioByID(audioID) {
    document.getElementById(audioID).pause()
}

/**
 * Sets audio volume of given HTML audio element
 * @param {string} audioID ID of the HTML audio player element
 * @param volume - The volume to set the audio to.
 */
function setAudioVolumeByID(audioID, volume) {
    //0.0 - 1.0
    document.getElementById(audioID).volume = volume
}

/**
 * Toggles (Start/Stop) given HTML audio element
 * @param {string} audioID ID of the HTML audio player element
 */
function audioOnOff(audioID) {
    if (document.getElementById(audioID).paused) {
        playAudioByID(audioID)
    } else {
        pauseAudioByID(audioID)
    }
}

export { pauseAudioByID, playAudioByID, setAudioVolumeByID, audioOnOff }
