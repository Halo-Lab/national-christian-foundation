import { useEffect, useState } from "react";
import styles from "./CharitiesSearchList.module.scss";
import { organisationSearchList } from "data/charityOrganisations";
import CharitiesSearchItem from "components/SearchCharityModal/CharitiesSearchItem";
import Search from "assets/icons/Search";

const CharitiesSearchList = ({ query, selectedOption }) => {
    const [filteredList, setFilteredList] = useState([
        ...organisationSearchList,
    ]);

    useEffect(() => {
        query === ""
            ? setFilteredList([...organisationSearchList])
            : filterOrganisationsByQuery(query);
    }, [query]);

    useEffect(() => {
        if (selectedOption) {
            setFilteredList([...filterBySelectedOption(selectedOption)]);
            console.log(selectedOption);
        }
    }, [selectedOption]);

    const filterBySelectedOption = (option) =>
        organisationSearchList.filter(
            (organisation) =>
                organisation.category === option ||
                organisation.city === option ||
                organisation.state === option
        );

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
