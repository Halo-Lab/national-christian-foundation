import NumberedTitle from "components/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupported from "components/RecentlySupported";
import { recentlySupportedOrganisations } from "data/recentlySupported";
import CharitySelector from "components/CharitySelector";

const SelectCharity = () => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <NumberedTitle number={1} title={"Select a charity"} />
            <CharitySelector />
            <RecentlySupported
                organisationList={recentlySupportedOrganisations}
            />
        </div>
    );
};

export default SelectCharity;
