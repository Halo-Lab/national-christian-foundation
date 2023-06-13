import NumberedTitle from "components/common/NumberedTitle";
import styles from "./GrantDetails.module.scss";
import cn from "classnames";
import LabeledCheckbox from "components/common/LabeledCheckbox";
import CustomInput from "components/common/CustomInput";
import { useState } from "react";
import Cost from "assets/icons/Cost";

const GrantDetails = () => {
    const [amountValue, setAmountValue] = useState("");
    const amountInputChange = (value) => setAmountValue(value);

    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle title="Enter details" number={2} />
            <div className={styles.amount}>
                <h6 className="text-m bold">Enter an amount</h6>
                <CustomInput
                    type="number"
                    icon={<Cost />}
                    value={amountValue}
                    placeholder="Available balance: $123,456.00"
                    onInputChange={amountInputChange}
                />
            </div>
            <div className={styles.frequency}>
                <h6 className="text-m bold">Grant frequency</h6>
            </div>
            <div className={styles.timing}>
                <h6 className="text-m bold">Timing</h6>
            </div>
            <div className={styles.privacy}>
                <h6 className="text-m bold">Privacy</h6>
                <LabeledCheckbox label="Make this grant anonymous?" />
            </div>
        </div>
    );
};

export default GrantDetails;
