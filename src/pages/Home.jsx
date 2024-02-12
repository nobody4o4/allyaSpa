<<<<<<< HEAD
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewsMain from "../features/reviewsMain";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <ReviewsMain />
      <Footer />
=======
import React from 'react'
import ReviewsMain from '../features/reviewsMain'
import MainSlider from '../components/slider/mainSlider'

export default function Home() {
  return (
    <div className=''>
        <ReviewsMain />
        <MainSlider />

>>>>>>> 2ca12e2b691f84fa02d759d690ed93902d793aaa
    </div>
  );
}
