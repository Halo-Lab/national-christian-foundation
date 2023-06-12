import MapPin from "assets/icons/MapPin";
import styles from "./CharitiesSearchItem.module.scss";
import cn from "classnames";
import LikeButton from "components/LikeButton";
import SelectCharityButton from "components/SelectCharityButton";

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
                <SelectCharityButton organisation={organisation} />
                <LikeButton organisation={organisation}/>
            </div>
        </li>
    );
};

export default CharitiesSearchItem;
