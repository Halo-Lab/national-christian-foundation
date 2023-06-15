import Dropdown from "components/common/Dropdown";
import styles from "./FilterRow.module.scss";
import { organisationSearchList } from "data/charityOrganisations";
import { removeDuplicates } from "helpers/removeDuplicates";

const FilterRow = ({ selectedOption, setSelectedOption }) => {
    const causesList = removeDuplicates(
        organisationSearchList.map((el) => el.cause)
    );
    const citiesList = removeDuplicates(
        organisationSearchList.map((el) => el.city)
    );
    const statesList = removeDuplicates(
        organisationSearchList.map((el) => el.state)
    );

    return (
        <div className={styles.wrapper}>
            <h4 className="title-h4">Browse</h4>
            <div className={styles.row}>
                <Dropdown
                    placeholder="City"
                    optionsList={citiesList}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <Dropdown
                    placeholder="State"
                    optionsList={statesList}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <Dropdown
                    placeholder="Cause"
                    optionsList={causesList}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            </div>
        </div>
    );
};

export default FilterRow;
