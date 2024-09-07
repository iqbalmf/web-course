import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import KelasPage from "./pages/KelasPage.jsx";
import TestimoniPage from "./pages/TestimoniPage.jsx";
import TncPage from "./pages/TncPage.jsx";
import FaqComponent from "./components/FaqComponent.jsx";
import NavBarComponent from "./components/NavBarComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

function App() {
    return (
        <div>
            <NavBarComponent/>
            <Routes>
                <Route path={"/"} Component={HomePage}/>
                <Route path={"/kelas"} Component={KelasPage}/>
                <Route path={"/testimoni"} Component={TestimoniPage}/>
                <Route path={"/faq"} Component={FaqComponent}/>
                <Route path={"/tnc"} Component={TncPage}/>
            </Routes>
            <FooterComponent/>
        </div>
    )
}

export default App
