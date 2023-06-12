import { useState } from "react";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <button
            className={`${styles.wrapper} cta ${
                isDarkTheme ? styles.dark : styles.light
            }`}
            onClick={() => toggleTheme()}
        >
            <div className={styles.circle}></div>
        </button>
    );
};

export default ThemeToggle;
