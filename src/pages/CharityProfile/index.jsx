import { useLocation } from "react-router-dom";
import styles from "./CharityProfile.module.scss";
import CharityProfileInfo from "components/CharityProfileInfo";
import CharityContactInfo from "components/CharityContactInfo";
import CausesList from "components/CausesList";

const CharityProfile = () => {
    const { state } = useLocation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <CharityProfileInfo organisation={state} />
            </div>
            <div className={styles.rightSide}>
                <CharityContactInfo contacts={state.contacts} />
                <CausesList
                    primaryCause={state.cause}
                    secondaryCauses={state.causesList}
                />
            </div>
        </div>
    );
};

export default CharityProfile;
