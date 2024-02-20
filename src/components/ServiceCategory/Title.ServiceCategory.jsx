import bill from "../../assets/bill.png"


function TitleServiceCategory() {
  return (
    <div className="flex flex-col items-center relative ">
      <img src={bill} alt="gege" className="flex flex-col items-center w-full justify-center h-[25rem] object-cover "></img>
      <div className="absolute flex justify-center top-44">
      <h1 className="text-5xl font-bold text-white ">Our Services</h1>
      </div>
    </div>
  );
}
export default TitleServiceCategory;
