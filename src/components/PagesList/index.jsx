import { useState } from "react";
import PageTag from "../PageTag";
import styles from "./PagesList.module.scss";
import Home from "../../assets/icons/Home";
import HomeFilled from "../../assets/icons/HomeFilled";
import Grant from "../../assets/icons/Grant";
import GrantFilled from "../../assets/icons/GrantFilled";
import Give from "../../assets/icons/Give";
import GiveFilled from "../../assets/icons/GiveFilled";
import Favourites from "../../assets/icons/Favourites";
import FavouritesFilled from "../../assets/icons/FavouritesFilled";
import Activity from "../../assets/icons/Activity";
import ActivityFilled from "../../assets/icons/ActivityFilled";
import Legacy from "../../assets/icons/Legacy";
import LegacyFilled from "../../assets/icons/LegacyFilled";

const PagesList = () => {
    const [activePage, setActivePage] = useState("grant");

    const pages = [
        { name: "home", icon: <Home />, activeIcon: <HomeFilled /> },
        { name: "grant", icon: <Grant />,activeIcon: <GrantFilled /> },
        { name: "give", icon: <Give />,activeIcon: <GiveFilled />  },
        { name: "favourites", icon: <Favourites />,activeIcon: <FavouritesFilled />  },
        { name: "activity", icon: <Activity />,activeIcon: <ActivityFilled />  },
        { name: "legacy", icon: <Legacy />,activeIcon: <LegacyFilled />  },
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
