import CharityCause from "components/common/CharityCause";
import styles from "./CausesList.module.scss";
import cn from "classnames";
import NavigateToPdfButton from "components/common/NavigateToPdfButton";
import causesPdfFile from "assets/pdf/Grantmaking-Causes.pdf";

const CausesList = ({ primaryCause, secondaryCauses }) => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.primary}>
                <div className={styles.title}>
                    <h4 className="title-h4">Primary cause</h4>
                    <NavigateToPdfButton pdfFile={causesPdfFile} />
                </div>
                <CharityCause cause={primaryCause} />
            </div>
        </div>
    );
};

export default CausesList;
