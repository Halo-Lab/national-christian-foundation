import { useState } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import useDropdown from "hooks/useDropdown";
import Button from "../Button";
import DropdownItemWithCheckbox from "./DropdownItemWithCheckbox";
import { getStateFullName } from "helpers/getStateFullName";

const Dropdown = ({
    placeholder,
    optionsList,
    alignment = "left",
    setFilterOptions,
}) => {
    const [selected, setSelected] = useState([]);
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();

    const addOption = (option) => {
        if (selected.includes(option)) {
            const updatedOptions = selected.filter((el) => el !== option);
            setSelected(updatedOptions);
            setFilterOptions(updatedOptions);
        } else {
            const updatedOptions = [...selected, option];
            setFilterOptions(updatedOptions);
            setSelected(updatedOptions);
        }
    };

    const resetOptions = () => {
        setSelected([]);
        setFilterOptions([]);
    };

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
                    {optionsList.map((option, index) => (
                        <DropdownItemWithCheckbox
                            onClick={() => addOption(option)}
                            option={
                                placeholder.toLowerCase() === "state"
                                    ? `${getStateFullName(option)} - ${option}`
                                    : option
                            }
                            selectedLength={selected.length}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
