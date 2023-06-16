import { useEffect, useState } from "react";
import styles from "./DropdownItemWithCheckbox.module.scss";
import Checkbox from "components/common/Checkbox";

const DropdownItemWithCheckbox = ({ option, onClick, selectedLength }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (selectedLength === 0) setIsChecked(false);
    }, [selectedLength]);

    const handleCheckboxChange = () => setIsChecked(!isChecked);

    const clickHandler = (e) => {
        e.stopPropagation();
        onClick();
        handleCheckboxChange();
    };

    return (
        <li className={styles.dropdownItem} onClick={(e) => clickHandler(e)}>
            <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
            <p className="text-m">{option}</p>
        </li>
    );
};

export default DropdownItemWithCheckbox;
