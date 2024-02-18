import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SpecificService from "../pages/specificService.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import BookAppointment from "../components/BookAppointment.jsx";
import ServiceCategory from "../pages/ServiceCategory.jsx";
import AboutUs from "../pages/AboutUs.jsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specific-service" element={<SpecificService />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/services" element={<ServiceCategory />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
