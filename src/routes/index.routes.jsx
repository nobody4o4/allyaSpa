import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SpecificService from "../pages/specificService.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import BookAppointment from "../components/BookAppointment.jsx";

export default function MainRoute() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specificService" element={<SpecificService />} />
        <Route path="/appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
