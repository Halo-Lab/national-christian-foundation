import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./CustomInput.module.scss";

const CustomInput = ({
    type = "text",
    icon,
    placeholder,
    onInputChange,
    value,
    id,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => setInputValue(value), [value]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };

    return (
        <label className={cn("cta", styles.label, isFocused && styles.focused)}>
            {icon && <div className="icon">{icon}</div>}
            <input
                className={cn("text-m", styles.input)}
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                id={id}
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </label>
    );
};

export default CustomInput;
