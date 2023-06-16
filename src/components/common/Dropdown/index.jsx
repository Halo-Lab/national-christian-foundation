import { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import useDropdown from "helpers/hooks/useDropdown";
import Checkbox from "../Checkbox";
import Button from "../Button";

const Dropdown = ({
    placeholder,
    optionsList,
    selectedOption,
    setSelectedOption,
    alignment = "left",
}) => {
    const [selected, setSelected] = useState([]);
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const addOption = (option) => {
        if (selected.includes(option)) {
            const updatedOptions = selected.filter((el) => el !== option);
            setSelected(updatedOptions);
        } else setSelected([...selected, option]);
    };

    const resetOptions = () => setSelected([]);

    // useEffect(() => {
    //     console.log(selected);
    // }, [selected]);

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
                {placeholder}
                {selected.length > 0 && (
                    <>
                        {":"}
                        <span className={styles.length}>{selected.length}</span>
                    </>
                )}
            </p>
            <div className={cn("icon", styles.icon)}>
                <ChevronDown />
            </div>
            <div className={cn("dropdown", styles.dropdown, styles[alignment])}>
                {selected.length > 0 && (
                    <div className={styles.resetBtn}>
                        <Button
                            text="Clear filters"
                            type="ghost"
                            onClick={resetOptions}
                        />
                    </div>
                )}
                <ul className={styles.list}>
                    {optionsList.map((el, index) => (
                        <li
                            className={styles.dropdownItem}
                            onClick={() => addOption(el)}
                            key={index}
                        >
                            {selected.includes(el)}
                            <Checkbox initialState={selected.includes(el)} />
                            <p className="text-m">{el}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
