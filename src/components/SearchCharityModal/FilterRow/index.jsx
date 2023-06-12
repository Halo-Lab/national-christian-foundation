import Dropdown from "components/common/Dropdown";
import styles from "./FilterRow.module.scss";
import { organisationSearchList } from "data/charityOrganisations";
import { removeDuplicates } from "helpers/removeDuplicates";

const FilterRow = ({ setSelectedOption }) => {
    const categoryList = removeDuplicates(
        organisationSearchList.map((el) => el.category)
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
                    setSelectedOption={setSelectedOption}
                />
                <Dropdown
                    placeholder="State"
                    optionsList={statesList}
                    setSelectedOption={setSelectedOption}
                />
                <Dropdown
                    placeholder="Cause"
                    optionsList={categoryList}
                    setSelectedOption={setSelectedOption}
                />
            </div>
        </div>
    );
};

export default FilterRow;
