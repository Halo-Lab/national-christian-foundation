import MapPin from "assets/icons/MapPin";
import cn from "classnames";
import LikeButton from "components/common/LikeButton";
import styles from "./CharityProfileInfo.module.scss";
import Button from "components/common/Button";
import Grant from "assets/icons/pages-icons/Grant";
import { useOrganisationContext } from "context";
import { useNavigate } from "react-router";

const CharityProfileInfo = ({ organisation }) => {
    const { setSelectedOrganisation } = useOrganisationContext();
    const navigate = useNavigate();
    const statistics = [
        {
            value: "5",
            text: "NCF givers have this charity in their favorites list",
        },
        {
            value: "$0",
            text: "to this charity from my fund",
        },
        {
            value: "$25,307",
            text: "to this charity from all NCF givers",
        },
    ];

    const selectOrganisation = () => {
        navigate("/");
        setSelectedOrganisation(organisation);
    };

    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img
                        src={organisation.logo}
                        alt={organisation.name + " logo"}
                    />
                </div>
                <div className={styles.text}>
                    <h3 className="title-h3">{organisation.name}</h3>
                    <div className={styles.location}>
                        <div className="icon">
                            <MapPin />
                        </div>
                        <p className="text-m">{organisation.city}</p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button
                        text="Send a grant"
                        icon={<Grant />}
                        type="primary"
                        onClick={selectOrganisation}
                    />
                    <LikeButton organisation={organisation} size="large" />
                </div>
            </div>
            <ul className={styles.statistics}>
                {statistics.map((item, index) => (
                    <li className={styles.statisticsItem} key={index}>
                        <h6 className="statistics-number">{item.value}</h6>
                        <p className="text-s">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharityProfileInfo;
