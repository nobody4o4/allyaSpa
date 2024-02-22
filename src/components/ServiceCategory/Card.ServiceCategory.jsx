import messageIMG from "../../assets/p10.jpg";

function CardServiceCategory() {
  return (
    <div className="relative w-2/3 mx-auto h-72 flex -scale-[-1]">
      <div className="bg-cyan-100 h-2/3 mt-16 mr-20 bottom-0 flex">
        <div className="flex flex-col gap-y-4 pl-7 my-auto ">
          <h1 className="text-4xl font-medium">Massage</h1>
          <p className="w-[90%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
            quam quisque id.
          </p>
        </div>
        <img
          src={messageIMG}
          alt=""
          className="aspect-square w-60 object-cover translate-x-10 -translate-y-10"
        />
      </div>
    </div>
  );
}
export default CardServiceCategory;
