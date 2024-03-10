import bill from "../assets/bill.png";

// Define an array of image objects
const images = [
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
  { url: "https://source.unsplash.com/random/301x301/?3", alt: "Image 1" },
];

export default function GalleryMain() {
  return (
    <div className="relative flex flex-col">
      <img
        src={bill}
        alt="Banner"
        className="flex h-[25rem] w-full flex-col items-center justify-center object-cover"
      />
      <div className="absolute top-44 flex w-full justify-center">
        <h1 className="text-5xl font-bold text-white">Our Gallery</h1>
      </div>
      <div className="py-6 md:mx-24 lg:mx-32 dark:text-gray-50">
        <div className="mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500 ${index % 3 === 0 ? "col-span-2 row-span-2  " : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
