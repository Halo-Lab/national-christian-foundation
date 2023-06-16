import FaithfulLogo from "../../assets/FaithfulLogo";
import Button from "../common/Button";
import PagesList from "./PagesList";
import styles from "./SidePanel.module.scss";

const SidePanel = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <FaithfulLogo />
                <p className="text-m grey">From NCF </p>
            </div>

            <PagesList />
            <Button text="Log Out" type="secondary" size="small" />
        </div>
    );
};

export default SidePanel;
