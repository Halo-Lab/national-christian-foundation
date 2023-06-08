import NumberedTitle from "components/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupported from "components/RecentlySupported";
import { recentlySupportedOrganisations } from "data/charityOrganisations";
import CharitySelector from "components/CharitySelector";
import { useState } from "react";
import SelectedOrganisationInfo from "components/SelectedOrganisationInfo";
import ButtonLink from "components/ButtonLink";

const SelectCharity = () => {
    const [selectedOrganisation, setSelectedOrganisation] = useState(null);

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
                    <CharitySelector
                        setSelectedOrganisation={setSelectedOrganisation}
                    />
                    <RecentlySupported
                        organisationList={recentlySupportedOrganisations}
                        setSelectedOrganisation={setSelectedOrganisation}
                    />
                </>
            )}
        </div>
    );
};

export default SelectCharity;
