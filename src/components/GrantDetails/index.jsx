import NumberedTitle from "components/common/NumberedTitle";
import styles from "./GrantDetails.module.scss";
import cn from "classnames";
import Checkbox from "components/common/Checkbox";
import CustomInput from "components/common/CustomInput";
import { useState } from "react";
import Cost from "assets/icons/Cost";
import RadioButton from "components/common/RadioButton";

const GrantDetails = () => {
    const [amountValue, setAmountValue] = useState("");
    const [grantFrequency, setGrantFrequency] = useState("single");
    const [timing, setTiming] = useState("asap");

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
                <div className={styles.row}>
                    <RadioButton
                        id={1}
                        label="Single grant"
                        value={"single"}
                        isSelected={grantFrequency === "single"}
                        handleChange={() => setGrantFrequency("single")}
                    />
                    <RadioButton
                        id={2}
                        label="Recurring grant"
                        value={"recurring"}
                        isSelected={grantFrequency === "recurring"}
                        handleChange={() => setGrantFrequency("recurring")}
                    />
                </div>
            </div>
            <div className={styles.timing}>
                <h6 className="text-m bold">Timing</h6>
                <div className={styles.row}>
                    <RadioButton
                        id={3}
                        label="As soon as possible"
                        value={"asap"}
                        isSelected={timing === "asap"}
                        handleChange={() => setTiming("asap")}
                    />
                    <RadioButton
                        id={4}
                        label="On a specific future date"
                        value={"specificDate"}
                        isSelected={timing === "specificDate"}
                        handleChange={() => setTiming("specificDate")}
                    />
                </div>
            </div>
            <div className={styles.privacy}>
                <h6 className="text-m bold">Privacy</h6>
                <Checkbox label="Make this grant anonymous?" />
            </div>
        </div>
    );
};

export default GrantDetails;
