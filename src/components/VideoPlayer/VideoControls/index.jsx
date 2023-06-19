import Maximize from "assets/icons/Maximize";
import styles from "./VideoControls.module.scss";
import Pause from "assets/icons/Pause";
import Play from "assets/icons/Play";
import cn from "classnames";
import RangeInput from "./RangeInput";
import { transformSecToMin } from "helpers/transformSecToMin";
import VolumeButton from "./VolumeButton";
import SettingsButton from "./SettingsButton";

const VideoControls = ({
    togglePlay,
    isPlaying,
    isMouseOver,
    duration,
    currentTime,
    toggleFullScreen,
    onSeek,
    volume,
    handleVolumeChange,
    playbackRate,
    handlePlaybackRateChange,
    handleQualityChange,
    selectedQuality,
}) => {
    return (
        <>
            <button
                onClick={togglePlay}
                className={cn(
                    "cta",
                    styles.playBtn,
                    isMouseOver && styles.active
                )}
            >
                <div className="icon">{isPlaying ? <Pause /> : <Play />}</div>
            </button>
            <div
                className={cn(styles.controlsRow, isMouseOver && styles.active)}
            >
                <div className={cn("cta", styles.play)} onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <Play />}
                </div>
                <p className="video-digits">{transformSecToMin(currentTime)}</p>
                <RangeInput
                    duration={duration}
                    currentTime={currentTime}
                    onSeek={onSeek}
                />
                <p className="video-digits">{transformSecToMin(duration)}</p>
                <VolumeButton
                    volume={volume}
                    handleVolumeChange={handleVolumeChange}
                />
                <SettingsButton
                    handlePlaybackRateChange={handlePlaybackRateChange}
                    playbackRate={playbackRate}
                    selectedQuality={selectedQuality}
                    handleQualityChange={handleQualityChange}
                />
                <div
                    className={cn("cta", styles.controlIcon)}
                    onClick={toggleFullScreen}
                >
                    <Maximize />
                </div>
            </div>
        </>
    );
};

export default VideoControls;
