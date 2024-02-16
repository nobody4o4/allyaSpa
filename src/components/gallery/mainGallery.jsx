import React, { useState } from "react";
import main from "../../assets/asset 21.jpeg";
import bill from "../../assets/bill.png";

export default function MainGallery() {
  const images = [
    {
      image_id: 1,
      image: bill,
    },
    {
      image_id: 2,
      image: main,
    },
    {
      image_id: 3,
      image: bill,
    },
    {
      image_id: 4,
      image: main,
    },
    {
      image_id: 5,
      image: main,
    },
    {
      image_id: 6,
      image: bill,
    },
  ];

  const [mainImage, setMainImage] = useState(images[0].image);

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className=" ">
      <div className="flex gap-4 h-full">
        <div className="w-[30rem] h-[40rem] overflow-hidden">
        <img
            className="h-full w-full object-cover transition-transform duration-500 transform hover:scale-105"
            src={mainImage}
            alt="Main Image"
          />        </div>
        <div className="flex flex-col gap-2  w-fit">
          {images.slice(0,5)?.map((image) => (
            <div
              key={image.image_id}
              className="h-[122px] cursor-pointer  w-[10rem]"
            >
              <img
                alt="haha"
                onClick={() => handleImageChange(image.image)}
                className="w-full h-full object-cover hover:opacity-90"
                src={image.image}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
