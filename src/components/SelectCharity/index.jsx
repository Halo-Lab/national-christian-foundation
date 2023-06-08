import NumberedTitle from "components/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupported from "components/RecentlySupported";
import { recentlySupportedOrganisations } from "data/charityOrganisations";
import CharitySelector from "components/CharitySelector";
import { useState } from "react";

const SelectCharity = () => {
    const [selectedOrganisation, setSelectedOrganisation] = useState(null);

    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle number={1} title={"Select a charity"} />
            <CharitySelector
                setSelectedOrganisation={setSelectedOrganisation}
            />
            <RecentlySupported
                organisationList={recentlySupportedOrganisations}
                setSelectedOrganisation={setSelectedOrganisation}
            />
            {selectedOrganisation && <h2>{selectedOrganisation.name}</h2>}
        </div>
    );
};

export default SelectCharity;
