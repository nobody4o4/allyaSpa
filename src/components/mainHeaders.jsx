import hero from "../assets/hero.jpg";

export default function MainHeaders() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full"></div>
      <div className="relative h-screen w-full">
        <img className="h-full w-full object-cover" src={hero} alt="Hero"></img>
        <div className="absolute bottom-28 left-10 p-4 text-white md:block">
          <h1 className="text-6xl font-bold text-primaryColor">
            We Offer All Varities of
            <br /> Spa Services
          </h1>
          <p className="mt-2 text-2xl text-gray-600">
            Enjoy your relaxation and rejuvenation journey with us.
          </p>
        </div>
      </div>
    </div>
  );
}
