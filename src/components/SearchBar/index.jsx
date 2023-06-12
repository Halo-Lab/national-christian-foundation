import React, { useState } from "react";
import CustomInput from "components/CustomInput";
import styles from "./SearchBar.module.scss";
import Search from "assets/icons/Search";
import cn from "classnames";
import Close from "assets/icons/Close";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (value) => {
        setQuery(value);
        onSearch(value);
    };

    const resetQuery = () => {
        setQuery("");
        onSearch("");
    };

    return (
        <div className={styles.wrapper}>
            <CustomInput
                onInputChange={handleInputChange}
                icon={<Search />}
                placeholder="Search"
                value={query}
            />
            {query && (
                <div
                    className={cn("cta", styles.resetBtn)}
                    onClick={resetQuery}
                >
                    <Close />
                </div>
            )}
        </div>
    );
};

export default SearchBar;
