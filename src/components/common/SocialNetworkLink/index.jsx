import styles from "./SocialNetworkLink.module.scss";
import cn from "classnames";
import igLogo from "assets/ig-logo.png";
import fbLogo from "assets/fb-logo.png";
import twLogo from "assets/tw-logo.png";

const SocialNetworkLink = ({ href, type }) => {
    let logo;

    switch (type) {
        case "instagram":
            logo = igLogo;
            break;
        case "facebook":
            logo = fbLogo;
            break;
        case "twitter":
            logo = twLogo;
            break;

        default:
            logo = "social";
    }
    return (
        <a className={cn("cta", styles.wrapper)} href={href} target="_blank">
            <img className={styles.logo} src={logo} alt={type + " logo"} />
        </a>
    );
};

export default SocialNetworkLink;
