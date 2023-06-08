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
                icon && styles.icon,
                disabled && styles.disabled
            )}
        >
            {icon && <div className={styles.iconWrapper}>{icon}</div>}
            {size === "large" ? (
                <p className={cn(styles.text, "text-m bold")}>{text}</p>
            ) : (
                <p className={cn(styles.text, "text-s bold")}>{text}</p>
            )}
        </button>
    );
};

export default Button;
