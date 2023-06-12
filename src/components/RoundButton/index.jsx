import styles from "./RoundButton.module.scss";
import cn from "classnames";

const RoundButton = ({
    size = "large",
    icon,
    filledIcon,
    disabled,
    type = "grant",
}) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[size],
                styles[type],
                disabled && styles.disabled
            )}
        >
            {type.toLowerCase() !== "like" && (
                <div className={styles.filledIcon}>{filledIcon}</div>
            )}
            <div className={styles.icon}> {icon}</div>
        </button>
    );
};

export default RoundButton;
