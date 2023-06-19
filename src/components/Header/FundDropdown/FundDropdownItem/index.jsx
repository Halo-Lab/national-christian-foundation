import Checked from "assets/icons/Checked";
import styles from "./FundDropdownItem.module.scss";
import cn from "classnames";

const FundDropdownItem = ({ fund }) => {
    return (
        <li className={cn("cta", styles.wrapper)}>
            <p className="text-m bold">{fund.name}</p>
            <div className={cn("text-m", styles.infoRow)}>
                <p>{fund.person}</p>
                <span className={styles.divider}></span>
                <p>{fund.office}</p>
                <span className={styles.divider}></span>
                <p>{fund.number}</p>
            </div>
            <p className="text-m">
                Balance:{" "}
                <span className={styles.balance}>{"$" + fund.balance}</span>
            </p>
            {fund.isChecked && (
                <div className={cn("icon", styles.check)}>
                    <Checked />
                </div>
            )}
        </li>
    );
};

export default FundDropdownItem;
