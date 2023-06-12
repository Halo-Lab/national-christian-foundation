import Close from "assets/icons/Close";
import styles from "./SearchCharityModal.module.scss";
import cn from "classnames";
import SearchBar from "components/SearchBar";
import { useRef, useState } from "react";
import CharitiesSearchList from "components/CharitiesSearchList";

const SearchCharityModal = ({ isModalActive, closeModal }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const modalRef = useRef(null);
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const modalClickHandler = (e) => {
        if (
            e.target !== modalRef.current &&
            !modalRef.current.contains(e.target)
        )
            closeModal();
    };
    return (
        <div
            className={cn(styles.wrapper, isModalActive && styles.active)}
            onClick={(e) => modalClickHandler(e)}
        >
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.titleRow}>
                    <h3 className="title-h3">Search for a charity</h3>
                    <div
                        className={cn("cta", styles.closeBtn)}
                        onClick={closeModal}
                    >
                        <Close />
                    </div>
                </div>
                <SearchBar onSearch={handleSearch} />
                <CharitiesSearchList query={searchQuery} />
            </div>
            <div className={styles.scrollGradient}></div>
        </div>
    );
};

export default SearchCharityModal;
