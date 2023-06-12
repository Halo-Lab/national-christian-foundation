import NumberedTitle from "components/common/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupportedSlider from "components/SelectCharity/RecentlySupportedSlider";
import { recentlySupportedOrganisations } from "data/charityOrganisations";
import CharitySelector from "components/SelectCharity/CharitySelector";
import SelectedOrganisationInfo from "components/SelectCharity/SelectedOrganisationInfo";
import ButtonLink from "components/common/ButtonLink";
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
