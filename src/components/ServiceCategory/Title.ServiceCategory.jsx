import bill from "../../assets/bill.png";

function TitleServiceCategory() {
  return (
    <div className="relative">
      <img
        src={bill}
        alt="gege"
        className="w-full h-[25rem] object-cover"
        style={{ filter: "brightness(70%)" }} // Apply brightness to the image
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-b from-slate-100 via-transparent to-transparent opacity-100 absolute inset-0"></div>
        {/* Overlay with gradient */}
        <h1 className="text-5xl font-bold text-white z-10">Our Services</h1>
      </div>
    </div>
  );
}

export default TitleServiceCategory;
