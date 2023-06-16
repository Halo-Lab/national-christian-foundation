import { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import useDropdown from "helpers/hooks/useDropdown";

const Dropdown = ({
    placeholder,
    optionsList,
    selectedOption,
    setSelectedOption,
}) => {
    const [selected, setSelected] = useState("");
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const selectOption = (option) => {
        setSelected(option);
        setSelectedOption(option);
    };

    useEffect(() => {
        if (selected !== selectedOption) setSelected("");
    }, [selectedOption, selected]);

    return (
        <div
            className={cn("cta", styles.wrapper, isActive && styles.active)}
            onClick={toggleDropdown}
            ref={dropdownRef}
        >
            <p
                className={cn(
                    "text-m grey",
                    styles.label,
                    selected && styles.selected
                )}
            >
                {selected ? selected : placeholder}
            </p>
            <div className={cn("icon", styles.icon)}>
                <ChevronDown />
            </div>
            <ul className={cn("dropdown", styles.dropdown)}>
                {optionsList.map((el, index) => (
                    <li
                        className={styles.dropdownItem}
                        onClick={() => selectOption(el)}
                        key={index}
                    >
                        <p className={cn("text-m", selected === el && "bold")}>
                            {el}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
