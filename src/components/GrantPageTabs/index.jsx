import styles from "./GrantPageTabs.module.scss";
import { useState } from "react";
import cn from "classnames";

const GrantPageTabs = () => {
    const [activeTab, setActiveTab] = useState("grant");

    const tabs = [
        { name: "grant", title: "Send a grant" },
        { name: "schedules", title: "Recurring schedules" },
        { name: "history", title: "History" },
    ];

    return (
        <ul className={styles.tabs}>
            {tabs.map((el, index) => (
                <li
                    className={cn(
                        styles.tabItem,
                        "cta",
                        activeTab === el.name && styles.active
                    )}
                    key={index}
                    onClick={() => setActiveTab(el.name)}
                >
                    <p className="title-h4 ">{el.title}</p>
                </li>
            ))}
        </ul>
    );
};

export default GrantPageTabs;