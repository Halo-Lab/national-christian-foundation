export const transformSecToMin = (seconds) => {
    const minutes = Math.floor(seconds / 60)
        .toString()
        .padStart(1, "0");
    const remainingSeconds = Math.round(seconds % 60)
        .toString()
        .padStart(2, "0");
    const time = `${minutes}:${remainingSeconds}`;
    return time;
};
