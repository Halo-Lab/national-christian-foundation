import styles from "./RoundButton.module.scss";
import cn from "classnames";

const RoundButton = ({
    size = "small",
    icon,
    filledIcon,
    disabled,
    type = "grant",
    className,
    onClick,
}) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[size],
                styles[type],
                className,
                disabled && styles.disabled
            )}
            onClick={onClick}
        >
            {type.toLowerCase() !== "like" && (
                <div className={cn("icon", styles.filledIcon)}>
                    {filledIcon}
                </div>
            )}
            <div className={cn("icon", styles.icon)}> {icon}</div>
        </button>
    );
};

export default RoundButton;
