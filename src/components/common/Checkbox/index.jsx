import { useState } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import Checked from "assets/icons/Checked";

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => setIsChecked(!isChecked);

    return (
        <div className={cn("cta", styles.wrapper)} onClick={toggleCheckbox}>
            <label className={cn(styles.label, isChecked && styles.checked)}>
                <input
                    value={isChecked}
                    className={cn("cta", styles.input)}
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                />
                {isChecked && <Checked />}
            </label>
            {label && <p className="text-m">{label}</p>}
        </div>
    );
};

export default Checkbox;
