import styles from "./Header.module.scss";
import ProfileInfo from "./ProfileInfo";
import Search from "assets/icons/Search";
import NotificationButton from "components/Header/NotificationButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <h3 className="title-h3">Grant to a charity</h3>
            <div className={styles.buttons}>
                <button className="cta header-btn">
                    <Search />
                </button>
                <NotificationButton />
                <ProfileInfo />
            </div>
        </header>
    );
};

export default Header;
