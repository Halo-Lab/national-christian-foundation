import styles from "./SettingsItem.module.scss";
import cn from "classnames";

const SettingsItem = ({ title, icon, aditional = false }) => {
    return (
        <li
            className={cn(
                "cta",
                styles.settingsItem,
                aditional && styles.aditional
            )}
        >
            <span className={styles.icon}>{icon}</span>
            <p className="text-m">{title}</p>
        </li>
    );
};

export default SettingsItem;
