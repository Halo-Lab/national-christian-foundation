import { useState } from "react";
import styles from "./FavoriteCharitiesDropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import Transfer from "assets/icons/Transfer";

const FavoriteCharitiesDropdown = ({
    organisationsList,
    setSelectedOrganisation,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isSorted, setIsSorted] = useState(false);

    const sortOrganisationsByName = (e) => {
        e.stopPropagation();
        setIsSorted(!isSorted);
        isSorted
            ? (organisationsList = organisationsList.sort(
                  compareOrganisationsByName
              )).reverse()
            : (organisationsList = organisationsList.sort(
                  compareOrganisationsByName
              ));
    };

    const compareOrganisationsByName = (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        return nameB.localeCompare(nameA);
    };

    return (
        <div
            className={cn("cta", styles.wrapper, isActive && styles.active)}
            onClick={() => setIsActive(!isActive)}
        >
            <p className={cn("text-m", styles.placeholder)}>
                My favorite charities
            </p>
            <ChevronDown />
            <div className={styles.dropdown}>
                <div className={styles.btnWrapper}>
                    <button
                        className={cn("cta", styles.sortBtn)}
                        onClick={(e) => sortOrganisationsByName(e)}
                    >
                        <div className={styles.icon}>
                            <Transfer />
                        </div>
                        <p className="text-s bold">
                            Sort by: Name {isSorted ? "Z-A" : "A-Z"}
                        </p>
                    </button>
                </div>
                <ul className={styles.organisationList}>
                    {organisationsList.map((organisation, index) => (
                        <li
                            className={cn("cta", styles.organisationItem)}
                            onClick={() =>
                                setSelectedOrganisation(organisation)
                            }
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
        </div>
    );
};

export default FavoriteCharitiesDropdown;
