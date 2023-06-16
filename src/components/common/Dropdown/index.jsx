import { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import useDropdown from "helpers/hooks/useDropdown";
import Checkbox from "../Checkbox";

const Dropdown = ({
    placeholder,
    optionsList,
    selectedOption,
    setSelectedOption,
    alignment = "left",
}) => {
    const [selected, setSelected] = useState([]);
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const selectOption = (option) => {
        setSelected([...selected, option]);
        // setSelectedOption([...selectedOption, option]);
    };

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    // useEffect(() => {
    //     if (selected !== selectedOption) setSelected("");
    // }, [selectedOption, selected]);

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
                    selected.length > 0 && styles.selected
                )}
            >
                {placeholder}{" "}
                {selected.length > 0 && (
                    <span className={styles.length}>{selected.length}</span>
                )}
            </p>
            <div className={cn("icon", styles.icon)}>
                <ChevronDown />
            </div>
            <ul className={cn("dropdown", styles.dropdown, styles[alignment])}>
                {optionsList.map((el, index) => (
                    <li
                        className={styles.dropdownItem}
                        onClick={() => selectOption(el)}
                        key={index}
                    >
                        <Checkbox initialState={selected === el} />
                        <p className="text-m">{el}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
