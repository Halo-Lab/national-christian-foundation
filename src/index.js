import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import OrganisationProvider from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <OrganisationProvider>
            <App />
        </OrganisationProvider>
    </React.StrictMode>
);
