import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollEl = document.querySelector(".scrollWrapper");
        const handleScroll = () => {
            const isScrolled = scrollEl.scrollTop > 0;
            setScrolled(isScrolled);
        };

        scrollEl.addEventListener("scroll", handleScroll);

        return () => {
            scrollEl.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrolled;
};

export default useScroll;
