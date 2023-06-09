import { useRef, useState } from "react";
import styles from "./VideoPlayer.module.scss";
import VideoControls from "./VideoControls";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

const VideoPlayer = ({ src }) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [selectedQuality, setSelectedQuality] = useState("Auto");
    const [playbackRate, setPlaybackRate] = useState(1);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const openFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(playerRef.current.wrapper);
        }
    };

    const handleSeek = (seekTime) => {
        if (playerRef.current) {
            playerRef.current.seekTo(seekTime);
        }
    };

    const handleTimeUpdate = (progress) =>
        setCurrentTime(progress.playedSeconds);

    const handleDuration = (duration) => setDuration(duration);

    const handleVolumeChange = (value) => {
        const newVolume = parseFloat(value);
        setVolume(newVolume);
    };

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    const handlePlaybackRateChange = (newSpeed) => setPlaybackRate(newSpeed);
    const handleQualityChange = (newQuality) => setSelectedQuality(newQuality);

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ReactPlayer
                url={src}
                width="100%"
                height="100%"
                controls={false}
                loop
                playing={isPlaying}
                onProgress={handleTimeUpdate}
                onDuration={handleDuration}
                ref={playerRef}
                volume={volume}
                playbackRate={playbackRate}
                config={{ file: { preload: "auto", quality: selectedQuality } }}
            />
            <VideoControls
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                isMouseOver={isMouseOver}
                currentTime={currentTime}
                duration={duration}
                toggleFullScreen={openFullscreen}
                onSeek={handleSeek}
                volume={volume}
                handleVolumeChange={handleVolumeChange}
                playbackRate={playbackRate}
                handlePlaybackRateChange={handlePlaybackRateChange}
                selectedQuality={selectedQuality}
                handleQualityChange={handleQualityChange}
            />
        </div>
    );
};

export default VideoPlayer;
