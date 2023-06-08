import { useState, useRef, useEffect } from "react";
import styles from "./ProfileInfo.module.scss";
import cn from "classnames";
import ChevronDown from "../../assets/icons/ChevronDown";
import ProfileDropdown from "components/ProfileDropdown";
import UserAvatar from "components/UserAvatar";

const ProfileInfo = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null);

    const user = {
        name: "Michael Jackson",
        email: "michael@gmail.com",
    };
    const openDropdown = () => setIsDropdownActive(true);

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
        <div className={styles.wrapper}>
            <div className={cn("cta", styles.balance)}>
                <p className="text-m">
                    The sample family fund{" "}
                    <span className="text-m bold">$123,456</span>
                </p>
                <div className={styles.chevron}>
                    <ChevronDown />
                </div>
            </div>
            <div
                className={cn("cta", styles.profile)}
                onClick={openDropdown}
                ref={dropdownRef}
            >
                <UserAvatar />
                <ProfileDropdown
                    user={user}
                    isActive={isDropdownActive}
                    setIsActive={setIsDropdownActive}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
