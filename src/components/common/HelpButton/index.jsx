import Help from "assets/icons/Help";
import styles from "./HelpButton.module.scss";
import cn from "classnames";

const HelpButton = () => {
    return (
        <div className={cn("cta", styles.wrapper)}>
            <Help />
        </div>
    );
};

export default HelpButton;
