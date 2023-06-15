import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CharityProfile.module.scss";
import CharityProfileInfo from "components/CharityProfileInfo";
import CharityContactInfo from "components/CharityContactInfo";
import CausesList from "components/CausesList";
import AboutCharity from "components/AboutCharity";
import Button from "components/common/Button";
import ChevronLeft from "assets/icons/ChevronLeft";

const CharityProfile = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const navigateToPrevPage = () => navigate(-1);

    return (
        <div className={styles.wrapper}>
            <Button
                text="Back"
                type="ghost"
                icon={<ChevronLeft />}
                onClick={navigateToPrevPage}
            />
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <CharityProfileInfo organisation={state} />
                    <AboutCharity organisation={state} />
                </div>
                <div className={styles.rightSide}>
                    <CharityContactInfo contacts={state.contacts} />
                    <CausesList
                        primaryCause={state.cause}
                        secondaryCauses={state.secondaryCauses}
                    />
                </div>
            </div>
        </div>
    );
};

export default CharityProfile;
