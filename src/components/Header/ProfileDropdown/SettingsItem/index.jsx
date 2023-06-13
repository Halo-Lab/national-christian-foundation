import ThemeToggle from "components/Header/ThemeToggle";
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
            <span className="icon">{icon}</span>
            <p className="text-m">{title}</p>
            {title.toLowerCase() === "dark mode" && (
                <div className={styles.themeToggle}>
                    <ThemeToggle />
                </div>
            )}
        </li>
    );
};

export default SettingsItem;
