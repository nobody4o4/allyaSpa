import { useEffect, useState } from "react";

function FetchMain(fetch) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch();
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

export default FetchMain;
