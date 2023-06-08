import styles from "./SuggestedCharities.module.scss";
import cn from "classnames";
import SuggestedCharitiesItem from "components/SuggestedCharitiesItem";
import { suggestedCharitiesOrganisations } from "data/charityOrganisations";

const SuggestedCharities = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className="title-h3">Charities you may like</h3>
            <div className={cn("grant-bg", styles.charities)}>
                <ul className={styles.list}>
                    {suggestedCharitiesOrganisations.map(
                        (organisation, index) => (
                            <SuggestedCharitiesItem
                                organisation={organisation}
                                key={index}
                            />
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SuggestedCharities;
