import RoundButton from "components/RoundButton";
import styles from "./LikeButton.module.scss";
import Heart from "assets/icons/Heart";

const LikeButton = () => {
    return <RoundButton size="small" icon={<Heart />} type="like" />;
};

export default LikeButton;
