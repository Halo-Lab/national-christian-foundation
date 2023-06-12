import styles from "./SuggestedCharities.module.scss";
import cn from "classnames";
import SuggestedCharitiesItem from "components/SuggestedCharitiesItem";
import SupportedCategoryInfo from "components/SupportedCategoryInfo";
import { suggestedCharitiesOrganisations } from "data/charityOrganisations";
import Smile from "assets/icons/categories/Smile";

const SuggestedCharities = () => {
    const supportedCattegory = {
        title: "Children's and youth ministry",
        description:
            "Organizations whose mission is to see children transformed by God through community and actively engaging their faith to make a difference for the kingdom. Programs allow children and youth to develop individual and group initiative and responsibility, self-reliance, courage, personal fitness, discipline, and other desirable qualities of character.",
        icon: <Smile />,
    };

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
                <SupportedCategoryInfo
                    category={supportedCattegory.title}
                    description={supportedCattegory.description}
                    categoryIcon={supportedCattegory.icon}
                />
            </div>
        </div>
    );
};

export default SuggestedCharities;
