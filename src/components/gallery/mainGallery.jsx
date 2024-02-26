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
    <div className="sm:px-6 lg:px-8 ">
      <div className="flex  flex-col-reverse md:flex-row lg:gap-4">
        <div className="flex w-full flex-row  gap-2 md:flex-col lg:w-auto lg:max-w-xs">
          {images.slice(0, 4).map((image) => (
            <div
              key={image.image_id}
              className="h-[80px] w-fit cursor-pointer md:h-[120px] md:w-[120px]"
            >
              <img
                alt="Thumbnail"
                onClick={() => handleImageChange(image.image)}
                className="h-full w-full object-cover hover:opacity-90"
                src={image.image}
              />
            </div>
          ))}
        </div>
        <div className="h-[14rem] w-full overflow-hidden sm:h-[20rem] md:h-[27rem] lg:h-[40rem] lg:w-auto lg:max-w-md">
          <img
            className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-105"
            src={mainImage}
            alt="Main Image"
          />
        </div>
      </div>
    </div>
  );
}
