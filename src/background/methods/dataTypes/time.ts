function getTimeStamp(): number {
    return Math.round(new Date().getTime() / 1000)
}

function getTimeStampFromDate(date: Date): number {
    return Math.round(new Date(date).getTime() / 1000)
}

function getRelativeTime(ts: number): string {
    const diff = Number(new Date()) - ts * 1000
    const minute = 60 * 1000
    const hour = minute * 60
    /* const day = hour * 24;
     const month = day * 30;
    const year = day * 365;*/
    switch (true) {
        case diff < minute:
            return "just now"
        case diff < hour:
            const minutes = Math.round(diff / minute)
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
        /* case diff < day:
            const hours = Math.round(diff / hour);
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        case diff < month:
            const days = Math.round(diff / day);
            return `${days} day${days > 1 ? "s" : ""} ago`;
        case diff < year:
            const months = Math.round(diff / month);
            return `${months} month${months > 1 ? "s" : ""} ago`;
        case diff > year:
            const years = Math.round(diff / year);
            return `${years} year${years > 1 ? "s" : ""} ago`;*/
        default:
            return ""
    }
}

function getDateAsStringFromTimestamp(ts: number): string {
    const relativeTime = getRelativeTime(ts)
    if (relativeTime) {
        return relativeTime
    }

    let dateFromTs = new Date(ts * 1000)
    let year = dateFromTs.getFullYear()
    let month = dateFromTs.getMonth() + 1
    let date = dateFromTs.getDate()
    return date + "." + month + "." + year
}

// 1 day 20 hours 29 minutes, 10 seconds
function getDurationAsString(duration: number): string {
    // props to https://stackoverflow.com/questions/36098913/convert-seconds-to-days-hours-minutes-and-seconds
    let d = Math.floor(duration / (3600 * 24))
    let h = Math.floor((duration % (3600 * 24)) / 3600)
    let m = Math.floor((duration % 3600) / 60)
    let s = Math.floor(duration % 60)

    let dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : ""
    let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : ""
    let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : ""
    let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : ""
    return dDisplay + hDisplay + mDisplay + sDisplay
}

export {
    getTimeStamp,
    getDateAsStringFromTimestamp,
    getTimeStampFromDate,
    getDurationAsString,
}
