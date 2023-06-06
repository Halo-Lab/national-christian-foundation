import Logo from "../../assets/Logo";
import PagesList from "../PagesList";
import styles from "./SidePanel.module.scss";

const SidePanel = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <PagesList />
        </div>
    );
};

export default SidePanel;
