import styles from "./PageTag.module.scss";
import cn from "classnames";

const PageTag = ({ pageName, icon, isActive, setActivePage }) => {
    return (
        <li
            className={cn("cta", styles.wrapper, isActive ? styles.active : "")}
            onClick={() => setActivePage(pageName)}
        >
            <div className={styles.icon}>{icon}</div>
            <p className={styles.text}>{pageName}</p>
        </li>
    );
};

export default PageTag;
