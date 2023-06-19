import GrantPage from "pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "components/common/Popup";
import HelpButton from "components/common/HelpButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharityProfile from "pages/CharityProfile";
import useScroll from "hooks/useScroll";
import cn from "classnames";

function App() {
    const scrolled = useScroll();
    return (
        <div className="App">
            <SidePanel />
            <BrowserRouter>
                <main className={cn("main", scrolled && "scrolled")}>
                    <Header />
                    <div className="scrollWrapper">
                        <Routes>
                            <Route exact path="/" element={<GrantPage />} />
                            <Route
                                path="/charity-profile/:id"
                                element={<CharityProfile />}
                            />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
            <Popup />
            <HelpButton />
        </div>
    );
}

export default App;
