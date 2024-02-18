import TopDetails from "../components/specificServices/topDetails";
import MainTopics from "../components/mainHeaders/mainTopics";
import Description from "../components/specificServices/description";

export default function SpecificService() {
  return (
    <div className="mx-28 flex flex-col gap-16 mt-[3rem] mb-[60px] ">
      <TopDetails />
      <MainTopics Headers={"Description"} />
      <Description />
    </div>
  );
}
