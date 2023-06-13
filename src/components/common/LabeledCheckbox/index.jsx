import Checkbox from "../Checkbox";
import styles from "./LabeledCheckbox.module.scss";

const LabeledCheckbox = ({ label }) => {
    return (
        <div className={styles.wrapper}>
            <Checkbox />
            <p className="text-m">{label}</p>
        </div>
    );
};

export default LabeledCheckbox;
