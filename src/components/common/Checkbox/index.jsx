import cn from "classnames";
import styles from "./Checkbox.module.scss";
import Checked from "assets/icons/Checked";

const Checkbox = ({ label, isChecked, onChange }) => {
    return (
        <div className={cn("cta", styles.wrapper)} onClick={onChange}>
            <label className={cn(styles.label, isChecked && styles.checked)}>
                <input
                    className={cn("cta", styles.input)}
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange}
                />
                {isChecked && <Checked />}
            </label>
            {label && <p className="text-m">{label}</p>}
        </div>
    );
};

export default Checkbox;
