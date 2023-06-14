import GrantPage from "pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "components/common/Popup";
import HelpButton from "components/common/HelpButton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharityProfile from "pages/CharityProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GrantPage />,
    },
    { path: "/charity-profile/:id", element: <CharityProfile /> },
]);

function App() {
    return (
        <div className="App">
            <SidePanel />
            <main>
                <Header />
                <RouterProvider router={router} />
            </main>
            <Popup />
            <HelpButton />
        </div>
    );
}

export default App;
