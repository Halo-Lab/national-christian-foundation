import { useLocation } from "react-router-dom";
import styles from "./CharityProfile.module.scss";
import CharityProfileInfo from "components/CharityProfileInfo";
import CharityContactInfo from "components/CharityContactInfo";

const CharityProfile = () => {
    const { state } = useLocation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <CharityProfileInfo organisation={state} />
            </div>
            <div className={styles.rightSide}>
                <CharityContactInfo contacts={state.contacts} />
            </div>
        </div>
    );
};

export default CharityProfile;
