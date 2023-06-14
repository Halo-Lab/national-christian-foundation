import CharityCause from "components/common/CharityCause";
import styles from "./CausesList.module.scss";
import cn from "classnames";
import ButtonLink from "components/common/ButtonLink";

const CausesList = ({ primaryCause, secondaryCauses }) => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.primary}>
                <div className={styles.title}>
                    <h4 className="title-h4">Primary cause</h4>
                    <ButtonLink text="Learn more" />
                </div>
                <CharityCause cause={primaryCause} />
            </div>
        </div>
    );
};

export default CausesList;
