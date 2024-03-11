import Gallery from "../components/Gallery";
import MainHeaders from "../components/mainHeaders";
import MainSlider from "../components/slider/mainSlider";
import AboutUs from "../features/home/aboutUs";
import OurServices from "../features/home/ourServices";
import ReviewsMain from "../features/home/reviewsMain";
import Location from "../components/Location";
import Counter from "../components/Counter";
import FetchMain from "../services/fetchMain.service";
import { getAboutUs } from "../endpoint/services.endpoint";

export default function Home() {
  const { data } = FetchMain(getAboutUs);
  return (
    <div className="">
      <MainHeaders />
      <AboutUs aboutUs={data} />
      <OurServices />
      <Gallery />
      <MainSlider />
      <Counter />
      <ReviewsMain />
      <Location />
    </div>
  );
}
