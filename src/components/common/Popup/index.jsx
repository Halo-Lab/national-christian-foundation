import Close from "assets/icons/Close";
import styles from "./Popup.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { useOrganisationContext } from "context";

const Popup = () => {
    const { isPopupActive, setIsPopupActive, lastFavoriteOrganisationName } =
        useOrganisationContext();

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsPopupActive(false), 3000);
        return () => clearTimeout(timeoutId);
    }, [isPopupActive, setIsPopupActive]);

    const closePopup = () => setIsPopupActive(false);

    return (
        <div
            className={cn(
                styles.wrapper,
                isPopupActive ? styles.show : styles.hide
            )}
        >
            <p className="text-m">
                <span className="bold">
                    {lastFavoriteOrganisationName.current}
                </span>{" "}
                added to your favorites list!
            </p>
            <div className={cn("cta icon", styles.icon)} onClick={closePopup}>
                <Close />
            </div>
        </div>
    );
};

export default Popup;
