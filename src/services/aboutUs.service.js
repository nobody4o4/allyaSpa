import { useEffect, useState } from "react";
import { getAboutUs } from "../endpoint/services.endpoint";

function AboutUsFetch() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAboutUs();
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

export default AboutUsFetch;
