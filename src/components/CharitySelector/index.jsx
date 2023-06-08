import FavoriteCharitiesDropdown from "components/FavoriteCharitiesDropdown";
import styles from "./CharitySelector.module.scss";
import { favoriteOrganisations } from "data/charityOrganisations";
import Button from "components/Button";
import Search from "assets/icons/Search";

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
                <Button
                    type={"secondary"}
                    text={"Search for a charity"}
                    icon={<Search />}
                />
            </div>
        </div>
    );
};

export default CharitySelector;
