import GrantPageTabs from "components/GrantPageTabs";
import styles from "./GrantPage.module.scss";
import UserBalanceDisplay from "components/UserBalanceDisplay";

const GrantPage = () => {
    return (
        <div className={styles.wrapper}>
            <GrantPageTabs />
            <div className={styles.container}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <UserBalanceDisplay balance={"123,456.00"} />
                </div>
            </div>
        </div>
    );
};

export default GrantPage;
