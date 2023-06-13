import GrantPage from "pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "components/common/Popup";
import HelpButton from "components/common/HelpButton";

function App() {
    return (
        <div className="App">
            <SidePanel />
            <main>
                <Header />
                <GrantPage />
            </main>
            <Popup />
            <HelpButton />
        </div>
    );
}

export default App;
