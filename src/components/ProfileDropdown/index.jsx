import styles from "./ProfileDropdown.module.scss";
import cn from "classnames";
import UserAvatar from "components/UserAvatar";
import Edit from "assets/icons/Edit";
import Email from "assets/icons/Email";
import Card from "assets/icons/Card";
import Users from "assets/icons/Users";
import Graph from "assets/icons/Graph";
import Microfinance from "assets/icons/Microfinance";
import Document from "assets/icons/Document";
import ContactUs from "assets/icons/ContactUs";
import Moon from "assets/icons/Moon";

const ProfileDropdown = ({ user, isActive }) => {
    const settings = {
        main: [
            { name: "Edit profile", icon: <Edit /> },
            { name: "Email preferences", icon: <Email /> },
            { name: "Saved giving options", icon: <Card /> },
            { name: "People on my Fund", icon: <Users /> },
            { name: "Investment options", icon: <Graph /> },
            { name: "Fundraisers", icon: <Microfinance /> },
        ],
        aditional: [
            { name: "Forms", icon: <Document /> },
            { name: "Contact us", icon: <ContactUs /> },
            { name: "Dark mode", icon: <Moon /> },
        ],
    };

    return (
        <div className={cn(styles.wrapper, isActive && styles.active)}>
            <div className={styles.userInfo}>
                <UserAvatar />
                <div className={styles.info}>
                    <p className="text-m bold">{user.name}</p>
                    <p className="text-m">{user.email}</p>
                </div>
            </div>
            <ul className={styles.mainSettings}>
                {settings.main.map((el, index) => (
                    <li key={index} className={cn("cta", styles.settingsItem)}>
                        <span className={styles.icon}>{el.icon}</span>
                        <p className="text-m">{el.name}</p>
                    </li>
                ))}
            </ul>
            <ul className={styles.aditionalSettings}>
                {settings.aditional.map((el, index) => (
                    <li key={index} className={cn("cta", styles.settingsItem)}>
                        <span className={styles.icon}>{el.icon}</span>
                        <p className="text-m">{el.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileDropdown;
