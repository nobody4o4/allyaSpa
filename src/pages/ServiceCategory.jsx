import CardServiceCategory from "../components/ServiceCategory/Card.ServiceCategory";
import FlipCardServiceCategory from "../components/ServiceCategory/FlipCard.ServiceCategory";
import TitleServiceCategory from "../components/ServiceCategory/Title.ServiceCategory";

function ServiceCategory() {
  return (
    <div className="space-y-5">
      <TitleServiceCategory />
      <CardServiceCategory />
      <FlipCardServiceCategory />
      <CardServiceCategory />
      <FlipCardServiceCategory />
      <CardServiceCategory />
      <FlipCardServiceCategory />
      <CardServiceCategory />
      <FlipCardServiceCategory />
      <CardServiceCategory />
    </div>
  );
}
export default ServiceCategory;
