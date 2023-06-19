import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsActive(!isActive);

    useEffect(() => {
        const handleMissClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            )
                setIsActive(false);
        };

        document.addEventListener("click", handleMissClick);

        return () => {
            document.removeEventListener("click", handleMissClick);
        };
    }, []);

    return {
        isActive,
        toggleDropdown,
        dropdownRef,
        setIsActive,
    };
};

export default useDropdown;
