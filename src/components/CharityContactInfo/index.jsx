import MapPin from "assets/icons/MapPin";
import styles from "./CharityContactInfo.module.scss";
import cn from "classnames";
import SocialNetworkLink from "components/common/SocialNetworkLink";
import Phone from "assets/icons/Phone";
import Website from "assets/icons/Website";

const CharityContactInfo = ({ contacts }) => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <h4 className="title-h4">Contact information</h4>
            <ul className={styles.contacts}>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <MapPin />
                    </div>
                    <p className="text-m">
                        Chino valley community church 14601 Peyton Dr
                        Chinohills, CA 91709
                    </p>
                </li>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <Phone />
                    </div>
                    <p className="text-m">909-606-4848</p>
                </li>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <Website />
                    </div>
                    <a
                        className="text-m"
                        href="https://www.cvcchurch.org/"
                        target="_blank"
                    >
                        cvcchurch.org
                    </a>
                </li>
            </ul>
            <ul className={styles.social}>
                <SocialNetworkLink type="twitter" href="https://twitter.com/" />
                <SocialNetworkLink
                    type="facebook"
                    href="https://www.facebook.com/"
                />
                <SocialNetworkLink
                    type="instagram"
                    href="https://www.instagram.com/"
                />
            </ul>
        </div>
    );
};

export default CharityContactInfo;
