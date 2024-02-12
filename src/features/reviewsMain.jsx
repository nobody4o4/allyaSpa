import React from "react";
import Reviews from "../components/reviews";
import MainSlider from "../components/slider/mainSlider";

export default function ReviewsMain() {
  return (
    <div className="bg-cyan-100 w-full flex items-center justify-center flex-col font-serif text-3xl">
      <div className="flex flex-col items-center justify-center gap-4  w-[50%] italic ">
        <h1>What our clients had to say </h1>
        <h1>about us!</h1>
        <div className="mt-20 w-[40rem]">
          <MainSlider sliders={<Reviews />} />
        </div>
      </div>
    </div>
  );
}
