import bill from "../../assets/bill.png"


function TitleServiceCategory() {
  return (
    <div className="flex flex-col gap-y-6 items-center w-full mx-auto justify-center h-[25rem] object-cover" style={{backgroundImage: `url(${bill})`}}>
      <h1 className="text-5xl font-bold text-white">Our Services</h1>
    </div>
  );
}
export default TitleServiceCategory;
