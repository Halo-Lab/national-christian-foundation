import { useLocation } from "react-router-dom";
import styles from "./CharityProfile.module.scss";
import CharityProfileInfo from "components/CharityProfileInfo";
import CharityContactInfo from "components/CharityContactInfo";
import CausesList from "components/CausesList";
import AboutCharity from "components/AboutCharity";

const CharityProfile = () => {
    const { state } = useLocation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <CharityProfileInfo organisation={state} />
                <AboutCharity />
            </div>
            <div className={styles.rightSide}>
                <CharityContactInfo contacts={state.contacts} />
                <CausesList
                    primaryCause={state.cause}
                    secondaryCauses={state.secondaryCauses}
                />
            </div>
        </div>
    );
};

export default CharityProfile;
