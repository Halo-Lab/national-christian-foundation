import styles from "./ButtonLink.module.scss";
import cn from "classnames";

const ButtonLink = ({ text, size = "large", disabled, onClickCallback }) => {
    return (
        <button
            className={cn("cta", styles.button, disabled && styles.disabled)}
            onClick={onClickCallback}
        >
            {size === "large" ? (
                <p className={cn(styles.text, "text-m bold")}>{text}</p>
            ) : (
                <p className={cn(styles.text, "text-s bold")}>{text}</p>
            )}
        </button>
    );
};

export default ButtonLink;
