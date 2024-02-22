import { url } from "./index.endpoint";

function getServiceCategories() {
  const servicesCategories = url.get(`/services-categories`);
  console.log(servicesCategories, "hh");
  return servicesCategories;
}

export default getServiceCategories;
