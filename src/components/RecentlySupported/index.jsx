import styles from "./RecentlySupported.module.scss";
import cn from "classnames";

const RecentlySupported = ({ organisationList }) => {
    return (
        <div className={styles.wrapper}>
            <h6 className="text-m bold">Recently supported</h6>
            <div className={styles.organisationsRow}>
                <ul className={styles.list}>
                    {organisationList.map((organisation, index) => (
                        <li
                            key={index}
                            className={cn("cta", styles.organisation)}
                        >
                            <div className={styles.logo}>
                                <img
                                    src={organisation.logo}
                                    alt={organisation.name + " logo"}
                                />
                            </div>
                            <p className="text-xs">{organisation.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecentlySupported;
