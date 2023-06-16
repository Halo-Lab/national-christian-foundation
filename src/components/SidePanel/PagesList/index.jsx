import { useState } from "react";
import PageTag from "./PageTag";
import styles from "./PagesList.module.scss";
import Home from "../../../assets/icons/pages-icons/Home";
import HomeFilled from "../../../assets/icons/pages-icons/HomeFilled";
import Grant from "../../../assets/icons/pages-icons/Grant";
import GrantFilled from "../../../assets/icons/pages-icons/GrantFilled";
import Give from "../../../assets/icons/pages-icons/Give";
import GiveFilled from "../../../assets/icons/pages-icons/GiveFilled";
import Favorites from "../../../assets/icons/pages-icons/Favorites";
import FavoritesFilled from "../../../assets/icons/pages-icons/FavoritesFilled";
import Activity from "../../../assets/icons/pages-icons/Activity";
import ActivityFilled from "../../../assets/icons/pages-icons/ActivityFilled";
import Legacy from "../../../assets/icons/pages-icons/Legacy";
import LegacyFilled from "../../../assets/icons/pages-icons/LegacyFilled";

const PagesList = () => {
    const [activePage, setActivePage] = useState("send");

    const pages = [
        { name: "home", icon: <Home />, activeIcon: <HomeFilled /> },
        { name: "send", icon: <Grant />, activeIcon: <GrantFilled /> },
        { name: "add", icon: <Give />, activeIcon: <GiveFilled /> },
        {
            name: "favorites",
            icon: <Favorites />,
            activeIcon: <FavoritesFilled />,
        },
        {
            name: "activity",
            icon: <Activity />,
            activeIcon: <ActivityFilled />,
        },
        { name: "legacy", icon: <Legacy />, activeIcon: <LegacyFilled /> },
    ];

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                {pages.map((page, index) => (
                    <PageTag
                        pageName={page.name}
                        icon={page.icon}
                        activeIcon={page.activeIcon}
                        isActive={activePage === page.name}
                        setActivePage={setActivePage}
                        key={index}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default PagesList;
