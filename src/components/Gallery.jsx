import image1 from "../assets/p10.jpg";
import image2 from "../assets/hero.png";
import image3 from "../assets/p3.jpeg";
import image4 from "../assets/p4.jpeg";
import Button from "./Button";

function Gallery() {
  return (
    <div className="h-[900 px] mb-10 mt-[14rem]  flex flex-col md:mx-24 lg:mx-32">
      <div className="mb-8 flex items-center justify-center">
        <p className="text-5xl font-bold">Our Gallery</p>
      </div>

      <div>
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img
            src={image1}
            alt=""
            className="col-span-2 row-span-2 aspect-square h-full min-h-96 w-full rounded object-cover shadow-sm md:col-start-3 md:row-start-1"
          />
          <img
            src={image2}
            alt=""
            className="col-span-2 aspect-square h-full min-h-48  w-full rounded object-cover shadow-sm"
          />
          <img
            src={image3}
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded object-cover shadow-sm"
          />
          <img
            src={image4}
            alt=""
            className="aspect-square h-full  min-h-48 w-full rounded  object-cover shadow-sm"
          />
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <Button title="View More" className="mx-auto" />
      </div>
    </div>
  );
}

export default Gallery;
