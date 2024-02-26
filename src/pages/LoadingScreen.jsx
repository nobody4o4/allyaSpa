import Loading from "../components/spinner";

function LoadingScreen() {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="m-auto text-center">
        <Loading />
      </div>
    </div>
  );
}
export default LoadingScreen;
