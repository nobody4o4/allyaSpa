import { useEffect } from "react";
import CardServiceCategory from "../components/ServiceCategory/Card.ServiceCategory";
import FlipCardServiceCategory from "../components/ServiceCategory/FlipCard.ServiceCategory";
import TitleServiceCategory from "../components/ServiceCategory/Title.ServiceCategory";
import getServiceCategories from "../endpoint/services.endpoint";
import { useState } from "react";
import messageIMG from "../assets/p10.jpg";

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
      <CardServiceCategory
        title="Message"
        description=" Lorem ipsum dolor sit amet, as ss consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
        quam quisque id."
        image={messageIMG}
      />
      <FlipCardServiceCategory
        title="Message"
        description=" Lorem ipsum dolor sit amet, as ss consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
        quam quisque id."
        image={messageIMG}
      />
      <CardServiceCategory
        title="Message"
        description=" Lorem ipsum dolor sit amet, as ss consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
       quam quisque id."
        image={messageIMG}
      />
    </div>
  );
}
export default ServiceCategory;
