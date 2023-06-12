import { useEffect, useState } from "react";
import styles from "./CharitiesSearchList.module.scss";
import {
    organisationSearchList,
    recentlySupportedOrganisations,
} from "data/charityOrganisations";
import CharitiesSearchItem from "components/CharitiesSearchItem";
import Search from "assets/icons/Search";

const CharitiesSearchList = ({ query }) => {
    const [filteredList, setFilteredList] = useState([
        ...organisationSearchList,
    ]);

    useEffect(() => {
        query === ""
            ? setFilteredList([...organisationSearchList])
            : filterOrganisationsByQuery(query);
    }, [query]);

    const filterOrganisationsByQuery = (query) => {
        setFilteredList(
            organisationSearchList.filter((organisation) =>
                organisation.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    };
    return (
        <>
            {filteredList.length > 0 ? (
                <ul className={styles.list}>
                    {filteredList.map((organisation, index) => (
                        <CharitiesSearchItem
                            organisation={organisation}
                            key={index}
                        />
                    ))}
                </ul>
            ) : (
                <>
                    <div className={styles.placeholder}>
                        <div className={styles.icon}>
                            <Search />
                        </div>
                        <p className="text-m">No results found...</p>
                    </div>
                    <h4 className="title-h4">Recently supported</h4>
                    <ul className={styles.list}>
                        {organisationSearchList.map((organisation, index) => (
                            <CharitiesSearchItem
                                organisation={organisation}
                                key={index}
                            />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default CharitiesSearchList;
