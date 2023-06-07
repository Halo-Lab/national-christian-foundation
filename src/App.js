import GrantPage from "components/pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

function App() {
    return (
        <div className="App">
            <SidePanel />
            <main>
                <Header />
                <GrantPage />
            </main>
        </div>
    );
}

export default App;
