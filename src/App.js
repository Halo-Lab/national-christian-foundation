import GrantPage from "pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "components/common/Popup";

function App() {
    return (
        <div className="App">
            <SidePanel />
            <main>
                <Header />
                <GrantPage />
            </main>
            <Popup />
        </div>
    );
}

export default App;
