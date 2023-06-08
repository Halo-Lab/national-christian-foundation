import NumberedTitle from "components/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";

const SelectCharity = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle number={1} title={"Select a charity"} />
        </div>
    );
};

export default SelectCharity;
