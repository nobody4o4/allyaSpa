import { url } from "./index.endpoint";

export function getServiceCategories() {
  const servicesCategories = url.get(`/services-categories`);
  console.log(servicesCategories, "hh");
  return servicesCategories;
}

export const getGallery = () => {
  const res = url.get(`/gallery`);
  return res;
};

export const getBlogs = () => {
  const res = url.get(`/blog`);
  return res;
};

export const getPrivacy = () => {
  const res = url.get(`/privacy`);
  return res;
};

export const getContact = () => {
  const res = url.get(`/contact`);
  return res;
};

export const getSocial = () => {
  const res = url.get(`/social-media`);
  return res;
};

export const getTermsCondition = () => {
  const res = url.get(`/terms-condition`);
  return res;
};
