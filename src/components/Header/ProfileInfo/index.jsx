import styles from "./ProfileInfo.module.scss";
import cn from "classnames";
import ChevronDown from "../../../assets/icons/ChevronDown";
import ProfileDropdown from "components/Header/ProfileDropdown";
import UserAvatar from "components/Header/UserAvatar";
import useDropdown from "hooks/useDropdown";

const ProfileInfo = () => {
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const user = {
        name: "Michael Jackson",
        email: "michael@gmail.com",
    };

    return (
        <div className={styles.wrapper}>
            <div className={cn("cta", styles.fund)}>
                <p className="text-m">The sample family fund</p>
                <div className={cn("icon", styles.chevron)}>
                    <ChevronDown />
                </div>
            </div>
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
