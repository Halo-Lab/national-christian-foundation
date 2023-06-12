import FavoriteCharitiesDropdown from "components/FavoriteCharitiesDropdown";
import styles from "./CharitySelector.module.scss";
import { favoriteOrganisations } from "data/charityOrganisations";
import SearchCharityButton from "components/SearchCharityButton";

const CharitySelector = ({ setSelectedOrganisation }) => {


    return (
        <div className={styles.wrapper}>
            <h6 className="text-m bold">Charity</h6>
            <div className={styles.row}>
                <FavoriteCharitiesDropdown
                    organisationsList={favoriteOrganisations}
                    setSelectedOrganisation={setSelectedOrganisation}
                />
                <p className="text-m">or</p>
                <SearchCharityButton />
            </div>
        </div>
    );
};

export default CharitySelector;
