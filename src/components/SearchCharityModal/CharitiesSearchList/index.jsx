import { useEffect, useState } from "react";
import styles from "./CharitiesSearchList.module.scss";
import { organisationSearchList } from "data/charityOrganisations";
import CharitiesSearchItem from "components/SearchCharityModal/CharitiesSearchItem";
import Search from "assets/icons/Search";

const CharitiesSearchList = ({ query, filterOptions }) => {
    const [filteredList, setFilteredList] = useState([
        ...organisationSearchList,
    ]);

    useEffect(() => {
        const filterByOption = () =>
            setFilteredList(
                organisationSearchList.filter((el) => {
                    return (
                        (!filterOptions.causes.length ||
                            filterOptions.causes.includes(el.cause)) &&
                        (!filterOptions.cities.length ||
                            filterOptions.cities.includes(el.city)) &&
                        (!filterOptions.states.length ||
                            filterOptions.states.includes(el.state))
                    );
                })
            );

        filterOptions.cities.length > 0 ||
        filterOptions.causes.length > 0 ||
        filterOptions.states.length > 0
            ? filterByOption()
            : setFilteredList(organisationSearchList);
    }, [filterOptions]);

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
                <>
                    <h4 className="title-h4">Search result</h4>
                    <ul className={styles.list}>
                        {filteredList.map((organisation, index) => (
                            <CharitiesSearchItem
                                organisation={organisation}
                                key={index}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <div className={styles.placeholder}>
                        <div className={styles.icon}>
                            <Search />
                        </div>
                        <p className="text-m grey">No results found...</p>
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
