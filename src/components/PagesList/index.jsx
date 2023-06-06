import PageTag from "../PageTag";
import styles from "./PagesList.module.scss";
import Home from "../../assets/icons/Home";
import Grant from "../../assets/icons/Grant";
import Give from "../../assets/icons/Give";
import Favourites from "../../assets/icons/Favourites";
import Activity from "../../assets/icons/Activity";
import Legacy from "../../assets/icons/Legacy";
import { useState } from "react";

const PagesList = () => {
    const [activePage, setActivePage] = useState("grant");

    const pages = [
        { name: "home", icon: <Home /> },
        { name: "grant", icon: <Grant /> },
        { name: "give", icon: <Give /> },
        { name: "favourites", icon: <Favourites /> },
        { name: "activity", icon: <Activity /> },
        { name: "legacy", icon: <Legacy /> },
    ];

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                {pages.map((page, index) => (
                    <PageTag
                        pageName={page.name}
                        icon={page.icon}
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
