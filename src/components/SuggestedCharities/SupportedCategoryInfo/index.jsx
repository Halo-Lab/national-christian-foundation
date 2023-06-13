import { useState } from "react";
import Info from "assets/icons/Info";
import styles from "./SupportedCategoryInfo.module.scss";
import cn from "classnames";

const SupportedCategoryInfo = ({ category, categoryIcon, description }) => {
    const [isTooltipActive, setIsTooltipActive] = useState(false);

    const handleMouseEnter = () => {
        setIsTooltipActive(true);
    };

    const handleMouseLeave = () => {
        setIsTooltipActive(false);
    };

    return (
        <div className={styles.wrapper}>
            <h6 className={cn("text-m bold", styles.title)}>
                Because you supported
            </h6>
            <div className={styles.tag}>
                <p className="text-m">{category}</p>
                <div
                    className={cn("cta icon", styles.icon)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Info />
                </div>
                {isTooltipActive && (
                    <div className={styles.tooltip}>
                        <div className={styles.tooltipTitle}>
                            <div className={cn("icon", styles.categoryIcon)}>
                                {categoryIcon}
                            </div>
                            <p className="text-m bold">{category}</p>
                        </div>
                        <p className="text-s">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SupportedCategoryInfo;
