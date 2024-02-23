import bill from "../assets/bill.png";

export default function GalleryMain() {
  return (
    <div className="relative flex flex-col ">
      <img
        src={bill}
        alt="gege"
        className="flex h-[25rem] w-full flex-col items-center justify-center object-cover "
      ></img>
      <div className="absolute top-44 flex w-full justify-center ">
        <h1 className="text-5xl font-bold text-white">Our Gallery</h1>
      </div>
      <div className="py-6   md:mx-24 lg:mx-32 dark:text-gray-50">
        <div className=" mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="col-span-2 row-span-2 aspect-square h-full min-h-96 w-full rounded shadow-sm md:col-start-3 md:row-start-1 dark:bg-gray-500"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <img
            alt=""
            className="aspect-square h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <img
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="col-span-2 row-span-2 aspect-square h-full min-h-96 w-full rounded shadow-sm md:col-start-1 md:row-start-3 dark:bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
