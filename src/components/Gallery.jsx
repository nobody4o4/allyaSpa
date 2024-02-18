import image1 from "../assets/p10.jpg";
import image2 from "../assets/hero.png";
import image3 from "../assets/p3.jpeg";
import image4 from "../assets/p4.jpeg";
import Button from "./Button";

function Gallery() {
  return (
    <div className="flex flex-col h-[900 px]  mx-32 my-10  mt-[10rem]">
      <div className="flex items-center justify-center mb-8">
      <p className="text-5xl font-bold">Our Gallery</p>

      </div>

      <div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={image1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square object-cover"
          />
          <img
            src={image2}
            alt=""
            className="w-full h-full col-span-2 rounded  shadow-sm min-h-48 aspect-square object-cover"
          />
          <img
            src={image3}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square object-cover"
          />
          <img
            src={image4}
            alt=""
            className="w-full h-full  rounded shadow-sm min-h-48  aspect-square object-cover"
          />
        </div>
      </div>
      <div className="flex mb-4 justify-center">
        <Button title="View More" className="mx-auto" />
      </div>
    </div>
  );
}

export default Gallery;
