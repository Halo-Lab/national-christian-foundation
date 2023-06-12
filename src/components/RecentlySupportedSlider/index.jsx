import Arrow from "assets/icons/Arrow";
import styles from "./RecentlySupportedSlider.module.scss";
import cn from "classnames";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useOrganisationContext } from "context";

const RecentlySupportedSlider = ({ organisationList }) => {
    const { setSelectedOrganisation } = useOrganisationContext();
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(false);

    const sliderButtonDisplayToggle = (swiper) => {
        swiper.isBeginning ? setIsBeginning(true) : setIsBeginning(false);
        swiper.isEnd ? setIsEnd(true) : setIsEnd(false);
    };

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
                    onSlideChange={sliderButtonDisplayToggle}
                    onInit={sliderButtonDisplayToggle}
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
                    className={cn(
                        "cta prev-btn",
                        styles.btn,
                        styles.leftBtn,
                        !isBeginning && styles.show
                    )}
                >
                    <Arrow />
                </button>
                <div
                    className={cn(
                        styles.gradientLeft,
                        !isBeginning && styles.show
                    )}
                ></div>
                <button
                    className={cn(
                        "cta next-btn",
                        styles.btn,
                        styles.rightBtn,
                        !isEnd && styles.show
                    )}
                >
                    <Arrow />
                </button>
                <div
                    className={cn(styles.gradientRight, !isEnd && styles.show)}
                ></div>
            </div>
        </div>
    );
};

export default RecentlySupportedSlider;
