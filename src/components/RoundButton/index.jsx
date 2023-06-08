import styles from "./RoundButton.module.scss";
import cn from "classnames";

const RoundButton = ({ size = "large", icon, disabled }) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[size],
                disabled && styles.disabled
            )}
        >
            {icon}
        </button>
    );
};

export default RoundButton;
