//Built in functions
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
const Home = lazy(() => import("../pages/Home.jsx"));
const SpecificService = lazy(() => import("../pages/specificService.jsx"));
const EachServices = lazy(() => import("../pages/eachServices.jsx"));
//Components
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ServiceCategory from "../pages/ServiceCategory.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import GalleryMain from "../pages/galleryMain.jsx";
import BookAppointment from "../pages/BookAppointment.jsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>hheheheh</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specific-service" element={<SpecificService />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/services" element={<ServiceCategory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/each-service" element={<EachServices />} />
          <Route path="*" element={<p>no page </p>} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
