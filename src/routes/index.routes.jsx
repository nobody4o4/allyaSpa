import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SpecificService from "../pages/specificService.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainRoute() {
  const path = location.pathname;

  return (
    <BrowserRouter>
      {path != "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specificService" element={<SpecificService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
