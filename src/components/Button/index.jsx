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
            {size === "large" ? (
                <p className={cn(styles.text, "text-m bold")}>{text}</p>
            ) : (
                <p className={cn(styles.text, "text-s bold")}>{text}</p>
            )}
        </button>
    );
};

export default Button;
