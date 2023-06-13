import Close from "assets/icons/Close";
import styles from "./NotificationDropdown.module.scss";
import cn from "classnames";
import Bell from "assets/icons/Bell";

const NotificationDropdown = ({ isDropdownActive, setIsDropdownActive }) => {
    const closeDropdown = () => setIsDropdownActive(false);

    return (
        <div
            className={cn(
                "dropdown",
                styles.wrapper,
                isDropdownActive && styles.active
            )}
        >
            <div className={styles.title}>
                <p className="text-m bold">Notifications</p>
                <div
                    className={cn("cta", styles.close)}
                    onClick={closeDropdown}
                >
                    <Close />
                </div>
            </div>
            <div className={styles.empty}>
                <div className={styles.icon}>
                    <Bell />
                </div>
                <div className={styles.text}>
                    <h4 className="title-h4">No notifications</h4>
                    <p className="text-m">
                        You don’t have notifications yet ...
                    </p>
                </div>
            </div>
            <div className={styles.triangle}></div>
        </div>
    );
};

export default NotificationDropdown;
