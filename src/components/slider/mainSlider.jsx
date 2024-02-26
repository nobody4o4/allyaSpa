import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function MainSlider({ sliders }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
      spaceBetween={10}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {[1, 2, 3, 4, 5].map((slide) => (
        <SwiperSlide key={slide}>{sliders}</SwiperSlide>
      ))}
    </Swiper>
  );
}
