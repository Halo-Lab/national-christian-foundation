import styles from "./VolumeButton.module.scss";
import cn from "classnames";
import Volume from "assets/icons/Volume";
import Muted from "assets/icons/Muted";
import { useState } from "react";

const VolumeButton = ({ volume, handleVolumeChange }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    // const { isActive, dropdownRef, toggleDropdown } = useDropdown();

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    const toggleVolume = () => {
        volume === 0 ? handleVolumeChange(1) : handleVolumeChange(0);
    };

    return (
        <div className={styles.wrapper} onMouseEnter={handleMouseEnter}>
            <button className={cn("cta", styles.button)} onClick={toggleVolume}>
                {volume === 0 ? <Muted /> : <Volume />}
            </button>
            <div
                className={cn(styles.dropdown, isMouseOver && styles.active)}
                onMouseLeave={handleMouseLeave}
            >
                <label htmlFor="volume" className={styles.label}>
                    <input
                        className={styles.input}
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) => handleVolumeChange(e.target.value)}
                    />
                    <div
                        className={styles.progress}
                        style={{
                            width: `${volume * 100}%`,
                        }}
                    ></div>
                </label>
            </div>
        </div>
    );
};

export default VolumeButton;
