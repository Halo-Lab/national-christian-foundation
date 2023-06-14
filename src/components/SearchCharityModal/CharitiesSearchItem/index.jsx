import MapPin from "assets/icons/MapPin";
import styles from "./CharitiesSearchItem.module.scss";
import cn from "classnames";
import LikeButton from "components/common/LikeButton";
import SelectCharityButton from "components/SelectCharity/SelectCharityButton";
import CharityCause from "components/common/CharityCause";
import { Link } from "react-router-dom";

const CharitiesSearchItem = ({ organisation }) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src={organisation.logo} alt={organisation.name} />
                </div>
                <Link
                    to={`/charity-profile/${organisation.id}`}
                    state={{ ...organisation }}
                >
                    <div className={cn("cta", styles.info)}>
                        <p className={cn("text-m", styles.name)}>
                            {organisation.name}
                        </p>
                        <div className={styles.city}>
                            <div className={styles.icon}>
                                <MapPin />
                            </div>
                            <p className="text-m">
                                {organisation.city + ", " + organisation.state}
                            </p>
                        </div>
                        <CharityCause
                            cause={organisation.cause}
                            textColor="grey"
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.buttons}>
                <SelectCharityButton organisation={organisation} />
                <LikeButton organisation={organisation} />
            </div>
        </li>
    );
};

export default CharitiesSearchItem;
