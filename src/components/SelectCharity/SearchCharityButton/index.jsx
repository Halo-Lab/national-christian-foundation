import styles from "./SearchCharityButton.module.scss";
import Button from "components/common/Button";
import Search from "assets/icons/Search";
import { useState } from "react";
import SearchCharityModal from "components/SearchCharityModal";

const SearchCharityButton = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    return (
        <>
            <Button
                type={"secondary"}
                text={"Search for a charity"}
                icon={<Search />}
                onClick={() => setIsSearchActive(true)}
            />
            <SearchCharityModal
                isModalActive={isSearchActive}
                closeModal={() => setIsSearchActive(false)}
            />
        </>
    );
};

export default SearchCharityButton;
