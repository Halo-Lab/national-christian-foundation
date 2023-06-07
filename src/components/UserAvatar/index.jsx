import styles from "./UserAvatar.module.scss";
import userAvatar from "assets/user-avatar.png";

const UserAvatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={userAvatar} alt="user avatar" />
        </div>
    );
};

export default UserAvatar;
