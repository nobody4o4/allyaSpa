import { useEffect, useState } from "react";
import { getServiceCategories } from "../endpoint/services.endpoint";

function AllServiceCategories() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getServiceCategories();
        setdata(response.data);
        console.log(data, "sca");
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);
  return data;
}

export default AllServiceCategories;
