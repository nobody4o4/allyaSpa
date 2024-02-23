import Gallery from "../components/Gallery";
import MainHeaders from "../components/mainHeaders";
import MainSlider from "../components/slider/mainSlider";
import AboutUs from "../features/home/aboutUs";
import OurServices from "../features/home/ourServices";
import ReviewsMain from "../features/home/reviewsMain";
import Location from "../components/Location";
import NavTest from "../components/NavTest";

export default function Home() {
  return (
    <div className="">
      <NavTest />
      <MainHeaders />
      <AboutUs />
      <OurServices />
      <Gallery />
      <MainSlider />
      <ReviewsMain />
      <Location />
    </div>
  );
}
