import styles from "./SuggestedCharitiesItem.module.scss";
import cn from "classnames";
import SelectCharityButton from "components/SelectCharity/SelectCharityButton";
import { Link } from "react-router-dom";

const SuggestedCharitiesItem = ({ organisation }) => {
    return (
        <div className={cn("cta", styles.wrapper)}>
            <div className={styles.logo}>
                <img
                    src={organisation.logo}
                    alt={organisation.name + " logo"}
                />
            </div>
            <div className={styles.content}>
                <Link
                    to={`/charity-profile/${organisation.id}`}
                    state={{ ...organisation }}
                >
                    <div className={styles.text}>
                        <p className={cn("text-m bold", styles.name)}>
                            {organisation.name}
                        </p>
                        <p className={cn("text-m", styles.city)}>
                            {`${organisation.city}, ${organisation.state}`}
                        </p>
                    </div>
                </Link>
                <SelectCharityButton organisation={organisation} />
            </div>
        </div>
    );
};

export default SuggestedCharitiesItem;
