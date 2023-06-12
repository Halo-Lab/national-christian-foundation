import NumberedTitle from "components/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupportedSlider from "components/RecentlySupportedSlider";
import { recentlySupportedOrganisations } from "data/charityOrganisations";
import CharitySelector from "components/CharitySelector";
import SelectedOrganisationInfo from "components/SelectedOrganisationInfo";
import ButtonLink from "components/ButtonLink";
import { useOrganisationContext } from "context";

const SelectCharity = () => {
    const { selectedOrganisation, setSelectedOrganisation } =
        useOrganisationContext();

    const resetSelectedOrganisation = () => setSelectedOrganisation(null);

    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.titleRow}>
                <NumberedTitle number={1} title={"Select a charity"} />
                {selectedOrganisation && (
                    <ButtonLink
                        text={"change"}
                        onClickCallback={resetSelectedOrganisation}
                    />
                )}
            </div>
            {selectedOrganisation ? (
                <SelectedOrganisationInfo
                    selectedOrganisation={selectedOrganisation}
                />
            ) : (
                <>
                    <CharitySelector />
                    <RecentlySupportedSlider
                        organisationList={recentlySupportedOrganisations}
                    />
                </>
            )}
        </div>
    );
};

export default SelectCharity;
