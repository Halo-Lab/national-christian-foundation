import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import ProfileInfo from "./ProfileInfo";
import Search from "assets/icons/Search";
import NotificationButton from "components/Header/NotificationButton";

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <h3 className="title-h3">
                {location.pathname === "/"
                    ? "Grant to a charity"
                    : "Charity profile"}
            </h3>
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
