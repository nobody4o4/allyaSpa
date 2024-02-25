import hero from "../assets/hero.jpg";

export default function MainHeaders() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full"></div>
      <div className="h-screen w-full">
        <img className="h-full w-full object-cover" src={hero}></img>
      </div>
    </div>
  );
}
