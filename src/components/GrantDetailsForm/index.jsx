import NumberedTitle from "components/common/NumberedTitle";
import styles from "./GrantDetailsForm.module.scss";
import cn from "classnames";

const GrantDetailsForm = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle title="Enter details" number={2} />
            <h4 className="title-h4">Just example for proper height</h4>
        </div>
    );
};

export default GrantDetailsForm;
