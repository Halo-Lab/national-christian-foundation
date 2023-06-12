import styles from "./NotificationButton.module.scss";
import cn from "classnames";
import Bell from "assets/icons/Bell";
import { useState, useEffect, useRef } from "react";
import NotificationDropdown from "../NotificationDropdown";

const NotificationButton = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);

    useEffect(() => {
        const handleMissClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            )
                setIsDropdownActive(false);
        };

        document.addEventListener("click", handleMissClick);

        return () => {
            document.removeEventListener("click", handleMissClick);
        };
    }, []);

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={cn("cta header-btn", styles.wrapper)}
                onClick={toggleDropdown}
            >
                <Bell />
            </button>
            <NotificationDropdown
                isDropdownActive={isDropdownActive}
                setIsDropdownActive={setIsDropdownActive}
            />
        </div>
    );
};

export default NotificationButton;
