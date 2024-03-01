import { useEffect, useState } from "react";
import { getContact } from "../endpoint/services.endpoint";

function ContactUsFetch() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getContact();
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

export default ContactUsFetch;
