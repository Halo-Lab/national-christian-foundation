import Logo from "../../assets/Logo";
import Button from "../common/Button";
import PagesList from "./PagesList";
import styles from "./SidePanel.module.scss";

const SidePanel = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <PagesList />
            <Button text="Log Out" type="secondary" size="small" />
        </div>
    );
};

export default SidePanel;
