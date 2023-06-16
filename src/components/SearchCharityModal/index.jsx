import Close from "assets/icons/Close";
import styles from "./SearchCharityModal.module.scss";
import cn from "classnames";
import SearchBar from "components/SearchCharityModal/SearchBar";
import { useRef, useState, useEffect } from "react";
import CharitiesSearchList from "components/SearchCharityModal/CharitiesSearchList";
import FilterRow from "./FilterRow";

const SearchCharityModal = ({ isModalActive, closeModal }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterOptions, setFilterOptions] = useState({
        cities: [],
        states: [],
        causes: [],
    });
    const [isBottom, setIsBottom] = useState(false);
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

    useEffect(() => {
        const element = modalRef.current;

        const handleScroll = () => {
            if (element) {
                const { scrollTop, clientHeight, scrollHeight } = element;

                Math.round(scrollTop + clientHeight) >= scrollHeight - 40
                    ? setIsBottom(true)
                    : setIsBottom(false);
            }
        };

        element?.addEventListener("scroll", handleScroll);

        return () => {
            element?.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                {!searchQuery && (
                    <FilterRow
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                    />
                )}
                <CharitiesSearchList
                    query={searchQuery}
                    filterOptions={filterOptions}
                />
            </div>
            <div
                className={cn(styles.scrollGradient, isBottom && styles.hide)}
            ></div>
        </div>
    );
};

export default SearchCharityModal;
