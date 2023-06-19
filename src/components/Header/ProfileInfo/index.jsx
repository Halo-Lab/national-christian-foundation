import styles from "./ProfileInfo.module.scss";
import cn from "classnames";
import ProfileDropdown from "components/Header/ProfileDropdown";
import UserAvatar from "components/Header/UserAvatar";
import useDropdown from "hooks/useDropdown";
import FundDropdown from "../FundDropdown";

const ProfileInfo = () => {
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const user = {
        name: "Michael Jackson",
        email: "michael@gmail.com",
    };

    return (
        <div className={styles.wrapper}>
            <FundDropdown />
            <div
                className={cn("cta", styles.profile)}
                onClick={toggleDropdown}
                ref={dropdownRef}
            >
                <UserAvatar />
                <ProfileDropdown user={user} isActive={isActive} />
            </div>
        </div>
    );
};

export default ProfileInfo;
