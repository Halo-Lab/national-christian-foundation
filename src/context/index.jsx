import React, { createContext, useContext, useState } from "react";

export const OrganisationContext = createContext();

const OrganisationProvider = ({ children }) => {
    const [selectedOrganisation, setSelectedOrganisation] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const contextValues = {
        selectedOrganisation,
        setSelectedOrganisation,
        favoritesList,
        setFavoritesList,
    };

    return (
        <OrganisationContext.Provider value={contextValues}>
            {children}
        </OrganisationContext.Provider>
    );
};

export const useOrganisationContext = () => useContext(OrganisationContext);
export default OrganisationProvider;
