import styles from "./SettingsButton.module.scss";
import cn from "classnames";
import Settings from "assets/icons/Settings";
import useDropdown from "hooks/useDropdown";
import SettingsDropdown from "../SettingsDropdown";

const SettingsButton = ({
    playbackRate,
    handlePlaybackRateChange,
    handleQualityChange,
    selectedQuality,
}) => {
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();
    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={cn("cta", styles.button)}
                onClick={toggleDropdown}
            >
                <Settings />
            </button>
            <div className={cn(styles.dropdown, isActive && styles.active)}>
                <SettingsDropdown
                    playbackRate={playbackRate}
                    handlePlaybackRateChange={handlePlaybackRateChange}
                    selectedQuality={selectedQuality}
                    handleQualityChange={handleQualityChange}
                />
            </div>
        </div>
    );
};

export default SettingsButton;
