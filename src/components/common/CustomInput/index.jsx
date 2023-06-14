import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./CustomInput.module.scss";

const CustomInput = ({
    type = "text",
    icon,
    placeholder,
    onInputChange,
    value,
}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => setInputValue(value), [value]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };

    return (
        <div className={cn("cta", styles.wrapper)}>
            {icon && <div className="icon">{icon}</div>}
            <input
                className={cn("text-m", styles.input)}
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default CustomInput;
