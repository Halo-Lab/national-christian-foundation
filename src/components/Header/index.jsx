import styles from "./Header.module.scss";
import cn from "classnames";
import ProfileInfo from "./ProfileInfo";
import Bell from "assets/icons/Bell";
import Search from "assets/icons/Search";

const Header = () => {
    return (
        <header className={styles.header}>
            <h3 className="title-h3">Grant to a charity</h3>
            <div className={styles.buttons}>
                <button className={cn("cta", styles.roundBtn)}>
                    <Search />
                </button>
                <button className={cn("cta", styles.roundBtn)}>
                    <Bell />
                </button>
                <ProfileInfo />
            </div>
        </header>
    );
};

export default Header;
