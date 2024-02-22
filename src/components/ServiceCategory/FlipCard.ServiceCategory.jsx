function FlipCardServiceCategory({ title, description, image }) {
  return (
    <div className="relative w-2/3 mx-auto h-72 flex -scale-[-1]">
      <div className="bg-cyan-100 h-2/3 mt-16 mr-20 bottom-0 flex flex-row-reverse ml-20">
        <div className="flex flex-col gap-y-4 my-auto pr-8">
          <h1 className="text-4xl font-medium text-right">{title}</h1>
          <p className=" text-right">{description}</p>
        </div>
        <img
          src={image}
          alt=""
          className="aspect-square w-60 object-cover -translate-x-14 -translate-y-14"
        />
      </div>
    </div>
  );
}
export default FlipCardServiceCategory;
