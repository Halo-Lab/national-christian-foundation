import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./CustomInput.module.scss";

const CustomInput = ({ icon, placeholder, onInputChange, value }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => setInputValue(value), [value]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };

    return (
        <div className={cn("cta", styles.wrapper)}>
            {icon && icon}
            <input
                className={cn("text-m", styles.input)}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default CustomInput;
