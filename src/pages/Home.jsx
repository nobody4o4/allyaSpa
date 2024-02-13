import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import MainSlider from "../components/slider/mainSlider";
import AboutUs from "../features/home/aboutUs";
import OurServices from "../features/home/ourServices";
import ReviewsMain from "../features/home/reviewsMain";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <AboutUs />
      <OurServices />
      <Booking />
      <Gallery />
      <MainSlider />
      <ReviewsMain />
      <Footer />
    </div>
  );
}
