import { useNavigate, useParams } from "react-router-dom";
import styles from "./CharityProfile.module.scss";
import CharityProfileInfo from "components/CharityProfileInfo";
import CharityContactInfo from "components/CharityContactInfo";
import CausesList from "components/CausesList";
import AboutCharity from "components/AboutCharity";
import Button from "components/common/Button";
import ChevronLeft from "assets/icons/ChevronLeft";
import { findItemById } from "helpers/findItemById";
import { allOrganisations } from "data/charityOrganisations";

const CharityProfile = () => {
    const { id } = useParams();
    const organisation = findItemById(allOrganisations, id);
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
                    <CharityProfileInfo organisation={organisation} />
                    <AboutCharity organisation={organisation} />
                </div>
                <div className={styles.rightSide}>
                    <CharityContactInfo contacts={organisation.contacts} />
                    <CausesList
                        primaryCause={organisation.cause}
                        secondaryCauses={organisation.secondaryCauses}
                    />
                </div>
            </div>
        </div>
    );
};

export default CharityProfile;
