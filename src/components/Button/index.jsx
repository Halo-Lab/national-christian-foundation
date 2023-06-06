import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ type, text, size = "large", icon, disabled }) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[type],
                styles[size],
                disabled && styles.disabled
            )}
        >
            <p className={styles.text}>{text}</p>
        </button>
    );
};

export default Button;
