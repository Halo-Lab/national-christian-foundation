import MapPin from "assets/icons/MapPin";
import styles from "./CharityContactInfo.module.scss";
import cn from "classnames";
import SocialNetworkLink from "components/common/SocialNetworkLink";
import Phone from "assets/icons/Phone";
import Website from "assets/icons/Website";

const CharityContactInfo = ({ contacts }) => {
    console.log(contacts.location);
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <h4 className="title-h4">Contact information</h4>
            <ul className={styles.contacts}>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <MapPin />
                    </div>
                    <p className="text-m">{contacts.location}</p>
                </li>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <Phone />
                    </div>
                    <a className="text-m" href={`tel:${contacts.phone}`}>
                        {contacts.phone}
                    </a>
                </li>
                <li className={styles.contactsItem}>
                    <div className="icon">
                        <Website />
                    </div>
                    <a
                        className="text-m"
                        href={`https://www.${contacts.website}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {contacts.website}
                    </a>
                </li>
            </ul>
            <ul className={styles.social}>
                <SocialNetworkLink
                    type="twitter"
                    href={
                        contacts.socialNetworks.twitter ||
                        "https://twitter.com/"
                    }
                />
                <SocialNetworkLink
                    type="facebook"
                    href={contacts.socialNetworks.facebook}
                />
                <SocialNetworkLink
                    type="instagram"
                    href={contacts.socialNetworks.instagram}
                />
            </ul>
        </div>
    );
};

export default CharityContactInfo;
