import styles from "./SelectedOrganisationInfo.module.scss";
import cn from "classnames";

const SelectedOrganisationInfo = ({ selectedOrganisation }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img
                    src={selectedOrganisation.logo}
                    alt={selectedOrganisation.name + " logo"}
                />
            </div>
            <div className={styles.text}>
                <h4 className="title-h4">{selectedOrganisation.name}</h4>
                <p className={cn("text-m", styles.address)}>
                    {selectedOrganisation.address}
                </p>
            </div>
        </div>
    );
};

export default SelectedOrganisationInfo;
