import GrantPage from "pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "components/common/Popup";
import HelpButton from "components/common/HelpButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharityProfile from "pages/CharityProfile";

function App() {
    return (
        <div className="App">
            <SidePanel />
            <BrowserRouter>
                <main>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<GrantPage />} />
                        <Route
                            path="/charity-profile/:id"
                            element={<CharityProfile />}
                        />
                    </Routes>
                </main>
            </BrowserRouter>
            <Popup />
            <HelpButton />
        </div>
    );
}

export default App;
