import bill from "../../assets/bill.png";

function TitleServiceCategory() {
  return (
    <div className="relative">
      <img
        src={bill}
        alt="gege"
        className="h-[25rem] w-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Overlay with gradient */}
        <h1 className="z-10 text-5xl font-bold text-white">Our Services</h1>
      </div>
    </div>
  );
}

export default TitleServiceCategory;
