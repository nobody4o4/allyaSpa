import { useEffect } from "react";
import CardServiceCategory from "../components/ServiceCategory/Card.ServiceCategory";
import FlipCardServiceCategory from "../components/ServiceCategory/FlipCard.ServiceCategory";
import TitleServiceCategory from "../components/ServiceCategory/Title.ServiceCategory";
import getServiceCategories from "../endpoint/services.endpoint";
import { useState } from "react";

function ServiceCategory() {
  const [service, setService] = useState([]);
  useEffect(() => {
    data();
  }, []);

  async function data() {
    try {
      const data = await getServiceCategories();
      setService(data.data.data);
      console.log(data, "sc");
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <div className="space-y-5">
      <TitleServiceCategory />
      {service?.map((services, index) => (
        <FlipCardServiceCategory
          key={index}
          title={services.title}
          description={services.description}
          image={services.image}
        />
      ))}
      <CardServiceCategory />
    </div>
  );
}
export default ServiceCategory;
