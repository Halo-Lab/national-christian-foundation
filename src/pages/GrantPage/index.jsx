import GrantPageTabs from "components/GrantPageTabs";
import styles from "./GrantPage.module.scss";
import UserBalanceDisplay from "components/UserBalanceDisplay";
import SelectCharity from "components/SelectCharity";
import SuggestedCharities from "components/SuggestedCharities";
import GrantDetails from "components/GrantDetails";
import Specialnstructions from "components/Specialnstructions";
import Button from "components/common/Button";
import ButtonLink from "components/common/ButtonLink";

const GrantPage = () => {
    return (
        <>
            <GrantPageTabs />
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <SelectCharity />
                    <GrantDetails />
                    <Specialnstructions />
                    <div className={styles.buttons}>
                        <Button text="Submit grant" type="primary" />
                        <ButtonLink text="Clear all" />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <UserBalanceDisplay balance={"123,456.00"} />
                    <SuggestedCharities />
                </div>
            </div>
        </>
    );
};

export default GrantPage;
