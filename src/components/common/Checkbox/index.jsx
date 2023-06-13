import { useState } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import Checked from "assets/icons/Checked";

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => setIsChecked(!isChecked);

    return (
        <div
            className={cn("cta", styles.wrapper, isChecked && styles.checked)}
            onClick={toggleCheckbox}
        >
            {isChecked && <Checked />}
        </div>
    );
};

export default Checkbox;
