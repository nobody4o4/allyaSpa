import messageIMG from "../../assets/p10.jpg";
function FlipCardServiceCategory() {
  return (
    <div className="relative w-2/3 mx-auto h-72 flex -scale-[-1]">
      <div className="bg-cyan-100 h-2/3 mt-16 mr-20 bottom-0 flex flex-row-reverse ml-20">
        <div className="flex flex-col gap-y-4 my-auto pr-8">
          <h1 className="text-4xl font-medium text-right">Massage</h1>
          <p className=" text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
            quam quisque id.
          </p>
        </div>
        <img
          src={messageIMG}
          alt=""
          className="aspect-square w-60 object-cover -translate-x-14 -translate-y-14"
        />
      </div>
    </div>
  );
}
export default FlipCardServiceCategory;
