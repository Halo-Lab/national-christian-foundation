import GrantPageTabs from "components/GrantPageTabs";
import styles from "./GrantPage.module.scss";

const GrantPage = () => {
    return (
        <div className={styles.wrapper}>
            <GrantPageTabs />
        </div>
    );
};

export default GrantPage;
