import Dropdown from "components/common/Dropdown";
import styles from "./FilterRow.module.scss";
import { organisationSearchList } from "data/charityOrganisations";
import { removeDuplicates } from "helpers/removeDuplicates";

const FilterRow = ({ filterOptions, setFilterOptions }) => {
    const causesList = removeDuplicates(
        organisationSearchList.map((el) => el.cause)
    );
    const citiesList = removeDuplicates(
        organisationSearchList.map((el) => el.city)
    );
    const statesList = removeDuplicates(
        organisationSearchList.map((el) => el.state)
    );

    const handleCityFilter = (newValue) =>
        setFilterOptions({ ...filterOptions, cities: newValue });
    const handleStateFilter = (newValue) =>
        setFilterOptions({ ...filterOptions, states: newValue });
    const handleCauseFilter = (newValue) =>
        setFilterOptions({ ...filterOptions, causes: newValue });

    return (
        <div className={styles.wrapper}>
            <h4 className="title-h4">Browse</h4>
            <div className={styles.row}>
                <Dropdown
                    placeholder="City"
                    optionsList={citiesList}
                    setFilterOptions={handleCityFilter}
                />
                <Dropdown
                    placeholder="State"
                    optionsList={statesList}
                    setFilterOptions={handleStateFilter}
                />
                <Dropdown
                    placeholder="Cause"
                    optionsList={causesList}
                    alignment="right"
                    setFilterOptions={handleCauseFilter}
                />
            </div>
        </div>
    );
};

export default FilterRow;
