import Arrow from "assets/icons/Arrow";
import styles from "./RecentlySupported.module.scss";
import cn from "classnames";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useOrganisationContext } from "context";

const RecentlySupported = ({ organisationList }) => {
    const { setSelectedOrganisation } = useOrganisationContext();
    // const [isEnd, setIsEnd] = useState(false);
    // const [isBeginning, setIsBeginning] = useState(true);

    return (
        <div className={styles.wrapper}>
            <h6 className="text-m bold">Recently supported</h6>
            <div className={styles.row}>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={12}
                    scrollbar={{ draggable: true }}
                    className={styles.slider}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    modules={[Navigation]}
                    onSlideChange={(swiper) => console.log(swiper.realIndex)}
                >
                    {organisationList.map((organisation, index) => (
                        <SwiperSlide
                            key={index}
                            className={cn("cta", styles.organisation)}
                            onClick={() =>
                                setSelectedOrganisation(organisation)
                            }
                        >
                            <div className={styles.logo}>
                                <img
                                    src={organisation.logo}
                                    alt={organisation.name + " logo"}
                                />
                            </div>
                            <p className="text-xs">{organisation.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className={cn("cta prev-btn", styles.btn, styles.leftBtn)}
                >
                    <Arrow />
                </button>
                <button
                    className={cn("cta next-btn", styles.btn, styles.rightBtn)}
                >
                    <Arrow />
                </button>
            </div>
        </div>
    );
};

export default RecentlySupported;
