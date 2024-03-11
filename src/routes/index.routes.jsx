//Built in functions
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
const Home = lazy(() => import("../pages/Home.jsx"));
const SpecificService = lazy(() => import("../pages/specificService.jsx"));
const EachServices = lazy(() => import("../pages/eachServices.jsx"));
const ContactUs = lazy(() => import("../pages/Contact.jsx"));
const ServiceCategory = lazy(() => import("../pages/ServiceCategory.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs.jsx"));
const GalleryMain = lazy(() => import("../pages/galleryMain.jsx"));
const BookAppointment = lazy(() => import("../pages/BookAppointment.jsx"));
const Faq = lazy(() => import("../pages/faq.jsx"));

//Components
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import LoadingScreen from "../pages/LoadingScreen.jsx";
import TestApp from "../pages/test.jsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/each-service/:serviceId/specific-service/:id"
            element={<SpecificService />}
          />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/test" element={<TestApp />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/services" element={<ServiceCategory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/each-service/:serviceId" element={<EachServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<p>no page </p>} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
