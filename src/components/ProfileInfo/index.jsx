import styles from "./ProfileInfo.module.scss";
import cn from "classnames";
import ChevronDown from "../../assets/icons/ChevronDown";
import { useState } from "react";
import ProfileDropdown from "components/ProfileDropdown";
import UserAvatar from "components/UserAvatar";

const ProfileInfo = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    
    const user = {
        name: "Michael Jackson",
        email: "michael@gmail.com",
    };
    const openDropdown = () => setIsDropdownActive(true);

    return (
        <div className={styles.wrapper} onClick={openDropdown}>
            <div className={cn("cta", styles.balance)}>
                <p className="text-m">
                    The sample family fund{" "}
                    <span className="text-m bold">$123,456</span>
                </p>
                <div className={styles.chevron}>
                    <ChevronDown />
                </div>
            </div>
            <UserAvatar />
            <ProfileDropdown user={user} isActive={isDropdownActive} />
        </div>
    );
};

export default ProfileInfo;
