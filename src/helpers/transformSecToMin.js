export const transformSecToMin = (seconds) => {
    const minutes = Math.floor(seconds / 60)
        .toString()
        .padStart(1, "0");
    const remainingSeconds = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
};
