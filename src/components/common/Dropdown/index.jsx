import { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";

const Dropdown = ({ placeholder, optionsList, setSelectedOption }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsActive(!isActive);

    const selectOption = (option) => {
        setSelected(option);
        setSelectedOption(option);
    };

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

    return (
        <div
            className={cn("cta", styles.wrapper, isActive && styles.active)}
            onClick={toggleDropdown}
            ref={dropdownRef}
        >
            <p
                className={cn(
                    "text-m",
                    styles.label,
                    selected && styles.selected
                )}
            >
                {selected ? selected : placeholder}
            </p>
            <div className={styles.icon}>
                <ChevronDown />
            </div>
            <ul className={styles.dropdown}>
                {optionsList.map((el, index) => (
                    <li
                        className={styles.dropdownItem}
                        onClick={() => selectOption(el)}
                        key={index}
                    >
                        <p className="text-m">{el}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
