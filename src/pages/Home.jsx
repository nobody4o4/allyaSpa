import React from 'react'
import ReviewsMain from '../features/reviewsMain'
import MainSlider from '../components/slider/mainSlider'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OurServices from '../features/ourServices';

export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <div className=' ml-40 mr-40'>
        <OurServices />
      </div>
        <ReviewsMain />
    <Footer />
    </div>
  );
}
