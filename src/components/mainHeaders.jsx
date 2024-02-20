import hero from "../assets/hero.png";

export default function MainHeaders() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full"></div>
      <div className="w-full h-screen">
        <img className="w-full h-full object-cover" src={hero}></img>
      </div>
    </div>
  );
}
