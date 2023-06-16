import styles from "./NotificationButton.module.scss";
import cn from "classnames";
import Bell from "assets/icons/Bell";
import NotificationDropdown from "../NotificationDropdown";
import useDropdown from "hooks/useDropdown";

const NotificationButton = () => {
    const { isActive, setIsActive, toggleDropdown, dropdownRef } =
        useDropdown();

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={cn("cta header-btn", styles.wrapper)}
                onClick={toggleDropdown}
            >
                <Bell />
            </button>
            <NotificationDropdown
                isDropdownActive={isActive}
                setIsDropdownActive={setIsActive}
            />
        </div>
    );
};

export default NotificationButton;
