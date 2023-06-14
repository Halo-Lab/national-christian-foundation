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
            <Checkbox label="Give special instructions to the charity" />
            <Checkbox label="Give special instructions to NCF" />
        </div>
    );
};

export default Specialnstructions;
