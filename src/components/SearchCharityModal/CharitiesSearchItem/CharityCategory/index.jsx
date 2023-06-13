import styles from "./CharityCategory.module.scss";
import Smile from "assets/icons/categories/Smile";
import Giving from "assets/icons/categories/Giving";
import Education from "assets/icons/categories/Education";
import Spiritual from "assets/icons/categories/Spiritual";
import Evangelism from "assets/icons/categories/Evangelism";

const CharityCategory = ({ category }) => {
    let icon;

    switch (category) {
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
            icon = "category";
    }
    return (
        <div className={styles.wrapper}>
            <div className="icon">{icon}</div>
            <p className="text-m">{category}</p>
        </div>
    );
};

export default CharityCategory;
