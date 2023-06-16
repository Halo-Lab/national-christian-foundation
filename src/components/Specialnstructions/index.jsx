import { useState } from "react";
import NumberedTitle from "components/common/NumberedTitle";
import styles from "./Specialnstructions.module.scss";
import cn from "classnames";
import Checkbox from "components/common/Checkbox";

const Specialnstructions = () => {
    const [options, setOptions] = useState({ charity: false, ncf: false });
    
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle
                number={3}
                title="Provide special instructions (optional)"
            />
            <Checkbox
                label="Give special instructions to the charity"
                isChecked={options.charity}
                onChange={() =>
                    setOptions({ ...options, charity: !options.charity })
                }
            />
            <Checkbox
                label="Give special instructions to NCF"
                isChecked={options.ncf}
                onChange={() => setOptions({ ...options, ncf: !options.ncf })}
            />
        </div>
    );
};

export default Specialnstructions;
