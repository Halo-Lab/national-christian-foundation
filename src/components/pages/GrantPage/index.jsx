import GrantPageTabs from "components/GrantPageTabs";
import styles from "./GrantPage.module.scss";
import UserBalanceDisplay from "components/UserBalanceDisplay";
import SelectCharity from "components/SelectCharity";
import SuggestedCharities from "components/SuggestedCharities";

const GrantPage = () => {
    return (
        <div className={styles.wrapper}>
            <GrantPageTabs />
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <SelectCharity />
                </div>
                <div className={styles.rightSide}>
                    <UserBalanceDisplay balance={"123,456.00"} />
                    <SuggestedCharities />
                </div>
            </div>
        </div>
    );
};

export default GrantPage;
