import React from "react";
import ReviewsMain from "../features/reviewsMain";
import MainSlider from "../components/slider/mainSlider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <ReviewsMain />
      <MainSlider />
      <Booking />
      <Gallery />
      <Footer />
    </div>
  );
}
