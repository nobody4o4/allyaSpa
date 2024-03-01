import CardServiceCategory from "../components/ServiceCategory/Card.ServiceCategory";
import FlipCardServiceCategory from "../components/ServiceCategory/FlipCard.ServiceCategory";
import TitleServiceCategory from "../components/ServiceCategory/Title.ServiceCategory";
import messageIMG from "../assets/p10.jpg";
import AllServiceCategories from "../services/serviceCategories.services";

function ServiceCategory() {
  // const [service, setService] = useState([]);
  // useEffect(() => {
  //   data();
  // }, []);

  // async function data() {
  //   try {
  //     const data = await getServiceCategories();
  //     setService(data.data.data);
  //     console.log(data, "sc");
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // }

  const { data } = AllServiceCategories();
  console.log(data, "sc");

  return (
    <div className="space-y-5">
      <TitleServiceCategory />
      {data?.map((services, index) => (
        <FlipCardServiceCategory
          key={index}
          title={services.title}
          description={services.description}
          image={services.image}
        />
      ))}
      <CardServiceCategory
        title="Massage"
        description=" Lorem ipsum dolor sit amet, as ss consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
        quam quisque id."
        image={messageIMG}
      />
      <FlipCardServiceCategory
        title="Massage"
        description=" Lorem ipsum dolor sit amet, as ss consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sollicitudin tempor id eu nisl nunca mi ipsum. Risus quis varius
        quam quisque id."
        image={messageIMG}
      />
      <CardServiceCategory
        title="Massage"
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
