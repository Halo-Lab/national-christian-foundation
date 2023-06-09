import styles from "./RoundButton.module.scss";
import cn from "classnames";

const RoundButton = ({ size = "large", icon, filledIcon, disabled }) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[size],
                disabled && styles.disabled
            )}
        >
            <div className={styles.filledIcon}>{filledIcon}</div>
            <div className={styles.icon}> {icon}</div>
        </button>
    );
};

export default RoundButton;
