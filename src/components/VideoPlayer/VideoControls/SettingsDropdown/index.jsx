import ChevronRight from "assets/icons/ChevronRight";
import styles from "./SettingsDropdown.module.scss";
import { useState } from "react";
import cn from "classnames";
import ChevronLeft from "assets/icons/ChevronLeft";
import Checked from "assets/icons/Checked";

const SettingsDropdown = ({
    handleQualityChange,
    selectedQuality,
    playbackRate,
    handlePlaybackRateChange,
}) => {
    const [activeSetting, setActiveSetting] = useState("default");
    const speedsList = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const avaliableQualities = ["Auto", 1080, 720, 540, 360, 240];
    // temporary solution for test task, in production version we will use  getInternalPlayer() and  getAvailableQualityLevels() to get avaliable qualities

    const settingMenuClickHandler = (e, subpage) => {
        e.stopPropagation();
        setActiveSetting(subpage);
    };

    return (
        <div className={styles.wrapper}>
            {activeSetting === "default" && (
                <ul className={styles.list}>
                    <li
                        className={cn("cta", styles.settingItem)}
                        onClick={(e) => settingMenuClickHandler(e, "quality")}
                    >
                        <p className="text-xs bold">Quality</p>
                        <div className={styles.settingInfo}>
                            <p className="text-xs bold">
                                {selectedQuality === "Auto"
                                    ? "Auto"
                                    : `${selectedQuality}p`}
                            </p>
                            <span className={styles.chevron}>
                                <ChevronRight />
                            </span>
                        </div>
                    </li>
                    <li
                        className={cn("cta", styles.settingItem)}
                        onClick={(e) => settingMenuClickHandler(e, "speed")}
                    >
                        <p className="text-xs bold">Speed</p>
                        <div className={styles.settingInfo}>
                            <p className="text-xs bold">
                                {playbackRate === 1
                                    ? "Normal"
                                    : `${playbackRate}x`}
                            </p>
                            <span className={styles.chevron}>
                                <ChevronRight />
                            </span>
                        </div>
                    </li>
                </ul>
            )}
            {activeSetting === "speed" && (
                <>
                    <div
                        className={cn("cta", styles.title)}
                        onClick={(e) => settingMenuClickHandler(e, "default")}
                    >
                        <div className={styles.chevron}>
                            <ChevronLeft />
                        </div>
                        <p className="text-xs bold">Speed</p>
                    </div>
                    <ul className={styles.settingList}>
                        {speedsList.map((el) => (
                            <li
                                className={cn("cta", styles.settingItem)}
                                key={el}
                                onClick={() => handlePlaybackRateChange(el)}
                            >
                                <p className="text-xs bold">
                                    {el === 1 ? "Normal" : `${el}x`}
                                </p>
                                {playbackRate === el && <Checked />}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {activeSetting === "quality" && (
                <>
                    <div
                        className={cn("cta", styles.title)}
                        onClick={(e) => settingMenuClickHandler(e, "default")}
                    >
                        <div className={styles.chevron}>
                            <ChevronLeft />
                        </div>
                        <p className="text-xs bold">Quality</p>
                    </div>
                    <ul className={styles.settingList}>
                        {avaliableQualities.map((el) => (
                            <li
                                className={cn("cta", styles.settingItem)}
                                key={el}
                                onClick={() => handleQualityChange(el)}
                            >
                                <p className="text-xs bold">
                                    {el === "Auto" ? "Auto" : `${el}p`}
                                </p>
                                {selectedQuality === el && <Checked />}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SettingsDropdown;
