import { useRef, useState } from "react";
import styles from "./VideoPlayer.module.scss";
import Pause from "assets/icons/Pause";
import Play from "assets/icons/Play";
import cn from "classnames";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        setIsPlaying(!video.paused);
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        const seekTime = (video.duration / 100) * e.target.value;
        video.currentTime = seekTime;
    };

    return (
        <div className={styles.wrapper}>
            <video className={styles.video} ref={videoRef} src={src} />
            <button onClick={togglePlay} className={cn("cta", styles.playBtn)}>
                <div className="icon">{isPlaying ? <Pause /> : <Play />}</div>
            </button>
            {/* <div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    onChange={handleSeek}
                    value={
                        (videoRef.current?.currentTime /
                            videoRef.current?.duration) *
                            100 || 0
                    }
                />
            </div> */}
        </div>
    );
};

export default VideoPlayer;
