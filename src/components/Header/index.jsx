import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import ProfileInfo from "./ProfileInfo";
import Search from "assets/icons/Search";
import NotificationButton from "components/Header/NotificationButton";
import useScroll from "hooks/useScroll";
import cn from "classnames";

const Header = () => {
    const location = useLocation();
    const scrolled = useScroll();

    return (
        <header className={cn(styles.header, scrolled && styles.scrolled)}>
            <h3 className="title-h3">
                {location.pathname === "/" ? "Send" : "Charity profile"}
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
