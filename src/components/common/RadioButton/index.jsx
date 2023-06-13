import { useState } from "react";
import cn from "classnames";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, initialState }) => {
    const [isChecked, setIsChecked] = useState(initialState);

    const toggleState = () => setIsChecked(!isChecked);

    return (
        <div className={cn("cta", styles.wrapper)} onClick={toggleState}>
            <div className={cn(styles.button, isChecked && styles.checked)}>
                <span className={styles.circle}></span>
            </div>
            <p className="text-m">{label}</p>
        </div>
    );
};

export default RadioButton;
