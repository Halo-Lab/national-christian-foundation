import styles from "./RangeInput.module.scss";
import cn from "classnames";

const RangeInput = ({ currentTime, onSeek, duration }) => {
    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        onSeek(seekTime);
    };

    return (
        <label className={styles.label} htmlFor="video-range">
            <div
                className={cn("cta", styles.progress)}
                style={{
                    width: `${
                        ((currentTime / duration).toFixed(2) + 1) * 100
                    }%`,
                }}
            ></div>
            <input
                className={styles.input}
                type="range"
                min={0}
                max={duration}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                id="video-range"
            />
        </label>
    );
};

export default RangeInput;
