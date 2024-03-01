import { useEffect, useState } from "react";
import { postContact } from "../endpoint/services.endpoint";

async function PostMain(form) {
  const [data, setdata] = useState([]);

  try {
    const response = await postContact(form);
    setdata(response.data);
    console.log(data, "sca");
  } catch (error) {
    console.log("error", error);
  }

  return data;
}

export default PostMain;
