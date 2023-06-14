import cn from "classnames";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ handleChange, id, isSelected, label, value }) => {
    return (
        <label className={cn("cta", styles.label)} htmlFor={id}>
            <input
                value={value}
                type="radio"
                checked={isSelected}
                onChange={handleChange}
                className={styles.input}
                id={id}
                name={value}
            />
            {label && <p className="text-m">{label}</p>}
        </label>
    );
};

export default RadioButton;
