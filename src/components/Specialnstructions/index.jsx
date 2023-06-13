import NumberedTitle from "components/common/NumberedTitle";
import styles from "./Specialnstructions.module.scss";
import cn from "classnames";

const Specialnstructions = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle
                number={3}
                title="Provide special instructions (optional)"
            />
        </div>
    );
};

export default Specialnstructions;
