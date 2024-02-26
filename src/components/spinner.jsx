import logo from "../assets/Logo.png";
function Loading() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={logo}
        className="w-40 scale-125 animate-bounce overflow-hidden"
        alt="Logo"
      />
      {/* <FiLoader className="animate-spin text-4xl" /> */}
    </div>
  );
}
export default Loading;
