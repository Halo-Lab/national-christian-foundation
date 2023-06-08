import RoundButton from "components/RoundButton";
import styles from "./SuggestedCharitiesItem.module.scss";
import cn from "classnames";
import Grant from "assets/icons/Grant";

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
                <div className={styles.text}>
                    <p className={cn("text-m bold", styles.name)}>
                        {organisation.name}
                    </p>
                    <p className={cn("text-m", styles.city)}>
                        {organisation.city}
                    </p>
                </div>

                <RoundButton size="small" icon={<Grant />} />
            </div>
        </div>
    );
};

export default SuggestedCharitiesItem;
