import UserAvatar from "components/UserAvatar";
import styles from "./ProfileDropdown.module.scss";
import cn from "classnames";

const ProfileDropdown = ({ user, isActive }) => {
    const settings = {
        main: [
            { name: "Edit profile", icon: "" },
            { name: "Email preferences", icon: "" },
            { name: "Saved giving options", icon: "" },
            { name: "People on my Fund", icon: "" },
            { name: "Investment options", icon: "" },
            { name: "Fundraisers", icon: "" },
        ],
        aditional: [
            { name: "Forms", icon: "" },
            { name: "Contact us", icon: "" },
            { name: "Dark mode", icon: "" },
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
                        <p className="text-m">{el.name}</p>
                    </li>
                ))}
            </ul>
            <ul className={styles.aditionalSettings}>
                {settings.aditional.map((el, index) => (
                    <li key={index} className={cn("cta", styles.settingsItem)}>
                        <p className="text-m">{el.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileDropdown;
