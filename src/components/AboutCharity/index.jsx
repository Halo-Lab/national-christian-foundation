import VideoPlayer from "components/VideoPlayer";
import styles from "./AboutCharity.module.scss";
import cn from "classnames";
import videoSrc from "assets/videos/Casey-Crawford’s-story.mp4";

const AboutCharity = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.video}>
                <h4 className="title-h4">Videos block</h4>
                <VideoPlayer src={videoSrc} />
            </div>
            <div className={styles.about}>
                <h4 className="title-h4">About us:</h4>
                <ul className={styles.list}>
                    <li>
                        <p className="text-m">
                            Lorem Ipsum is simply dummy text
                        </p>
                    </li>
                    <li>
                        <p className="text-m">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </li>
                    <li>
                        <p className="text-m">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book
                        </p>
                    </li>
                    <li>
                        <p className="text-m">
                            Lorem Ipsum is simply dummy text
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutCharity;
