import React, { useEffect, useState } from "react";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import MainHeaders from "../components/mainHeaders";
import MainSlider from "../components/slider/mainSlider";
import AboutUs from "../features/home/aboutUs";
import OurServices from "../features/home/ourServices";
import ReviewsMain from "../features/home/reviewsMain";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 700) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <div className="">
      <MainHeaders />
      <div>
        <NavBar />
        <AboutUs />
        <OurServices />
        <Gallery />
        <MainSlider />
        <ReviewsMain />
      </div>
    </div>
  );
}
