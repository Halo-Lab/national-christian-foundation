import NumberedTitle from "components/common/NumberedTitle";
import styles from "./Specialnstructions.module.scss";
import cn from "classnames";
import Checkbox from "components/common/Checkbox";

const Specialnstructions = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle
                number={3}
                title="Provide special instructions (optional)"
            />
            <div className={styles.row}>
                <Checkbox />
                <p className="text-m">
                    Give special instructions to the charity
                </p>
            </div>
            <div className={styles.row}>
                <Checkbox />
                <p className="text-m">Give special instructions to NCF</p>
            </div>
        </div>
    );
};

export default Specialnstructions;
