import styles from "./ProfileInfo.module.scss";
import userAvatar from "../../assets/user-avatar.png";
import cn from "classnames";
import ChevronDown from "../../assets/icons/ChevronDown";
import { useState } from "react";

const ProfileInfo = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    
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
            <div className={styles.avatar}>
                <img src={userAvatar} alt="user avatar" />
            </div>
        </div>
    );
};

export default ProfileInfo;
