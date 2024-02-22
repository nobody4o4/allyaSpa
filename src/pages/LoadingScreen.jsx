import Loading from "../components/spinner";

function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="m-auto text-center">
        <Loading />
      </div>
    </div>
  );
}
export default LoadingScreen;
