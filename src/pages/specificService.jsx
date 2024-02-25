import TopDetails from "../components/specificServices/topDetails";
import MainTopics from "../components/mainHeaders/mainTopics";
import Description from "../components/specificServices/description";

export default function SpecificService() {
  return (
    <div className=" mx-4 mb-[60px] flex flex-col gap-16 pt-40 md:mx-28 ">
      <TopDetails />
      <MainTopics Headers={"Description"} />
      <Description />
    </div>
  );
}
