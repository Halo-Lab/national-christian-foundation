import { useState } from "react";
import styles from "./FavoriteCharitiesDropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";

const FavoriteCharitiesDropdown = ({
    organisationsList,
    setSelectedOrganisation,
}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={cn("cta", styles.wrapper, isActive && styles.active)}
            onClick={() => setIsActive(!isActive)}
        >
            <p className={cn("text-m", styles.placeholder)}>
                My favorite charities
            </p>
            <ChevronDown />
            <ul className={styles.organisationList}>
                {organisationsList.map((organisation, index) => (
                    <li
                        className={cn("cta", styles.organisationItem)}
                        onClick={() => setSelectedOrganisation(organisation)}
                        key={index}
                    >
                        <div className={styles.logo}>
                            <img
                                src={organisation.logo}
                                alt={organisation.name + " logo"}
                            />
                        </div>
                        <p className="text-m">{organisation.name}</p>
                    </li>
                ))}
                <li></li>
            </ul>
        </div>
    );
};

export default FavoriteCharitiesDropdown;
