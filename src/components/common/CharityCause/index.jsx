import styles from "./CharityCause.module.scss";
import Smile from "assets/icons/categories/Smile";
import Giving from "assets/icons/categories/Giving";
import Education from "assets/icons/categories/Education";
import Spiritual from "assets/icons/categories/Spiritual";
import Evangelism from "assets/icons/categories/Evangelism";
import cn from "classnames";

const CharityCause = ({ cause, textColor = "default" }) => {
    let icon;

    switch (cause) {
        case "Children's and youth ministry":
            icon = <Smile />;
            break;
        case "Giving and generosity":
            icon = <Giving />;
            break;
        case "Education":
            icon = <Education />;
            break;
        case "Spiritual development":
            icon = <Spiritual />;
            break;
        case "Evangelism and missions":
            icon = <Evangelism />;
            break;

        default:
            icon = "cause";
    }
    return (
        <div className={styles.wrapper}>
            <div className="icon">{icon}</div>
            <p className={cn("text-m", textColor === "grey" && "grey")}>
                {cause}
            </p>
        </div>
    );
};

export default CharityCause;
