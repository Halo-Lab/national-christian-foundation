import { useRef, useState } from "react";
import styles from "./VideoPlayer.module.scss";
import VideoControls from "./VideoControls";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleFullScreen = () => {
        const video = videoRef.current;

        if (video.requestFullscreen) video.requestFullscreen();
        else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
        else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
        else if (video.msRequestFullscreen) video.msRequestFullscreen();
    };

    const handleSeek = (seekTime) => {
        videoRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleTimeUpdate = () =>
        setCurrentTime(videoRef.current?.currentTime);

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);
    
    return (
        <div
            className={styles.wrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                className={styles.video}
                ref={videoRef}
                src={src}
                muted
                loop
                onTimeUpdate={handleTimeUpdate}
                controls={false}
            />
            <VideoControls
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                isMouseOver={isMouseOver}
                videoRef={videoRef}
                currentTime={currentTime}
                duration={videoRef.current?.duration}
                toggleFullScreen={toggleFullScreen}
                onSeek={handleSeek}
            />
        </div>
    );
};

export default VideoPlayer;
