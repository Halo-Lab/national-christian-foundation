import MapPin from "assets/icons/MapPin";
import styles from "./CharitiesSearchItem.module.scss";
import cn from "classnames";
import RoundButton from "components/RoundButton";
import Grant from "assets/icons/Grant";
import GrantFilled from "assets/icons/GrantFilled";
import LikeButton from "components/LikeButton";

const CharitiesSearchItem = ({ organisation }) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src={organisation.logo} alt={organisation.name} />
                </div>
                <div className={cn("cta", styles.info)}>
                    <p className={cn("text-m", styles.name)}>
                        {organisation.name}
                    </p>
                    <div className={styles.city}>
                        <div className={styles.icon}>
                            <MapPin />
                        </div>
                        <p className="text-m">{organisation.city}</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.icon}></div>
                        <p className="text-m">{organisation.category}</p>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <RoundButton
                    size="small"
                    icon={<Grant />}
                    filledIcon={<GrantFilled />}
                />
                <LikeButton />
            </div>
        </li>
    );
};

export default CharitiesSearchItem;
