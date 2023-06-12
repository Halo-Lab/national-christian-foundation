import React, { createContext, useContext, useRef, useState } from "react";

export const OrganisationContext = createContext();

const OrganisationProvider = ({ children }) => {
    const [selectedOrganisation, setSelectedOrganisation] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const lastFavoriteOrganisationName = useRef(null);

    const contextValues = {
        selectedOrganisation,
        setSelectedOrganisation,
        favoritesList,
        setFavoritesList,
        isPopupActive,
        setIsPopupActive,
        lastFavoriteOrganisationName,
    };

    return (
        <OrganisationContext.Provider value={contextValues}>
            {children}
        </OrganisationContext.Provider>
    );
};

export const useOrganisationContext = () => useContext(OrganisationContext);
export default OrganisationProvider;
