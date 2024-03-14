import { url } from "./index.endpoint";

function getServiceCategories() {
  return url.get(`/services-categories`);
}

const getGallery = () => {
  const res = url.get(`/gallery`);
  return res;
};

const getBlogs = () => {
  const res = url.get(`/blog`);
  return res;
};

const getPrivacy = () => {
  const res = url.get(`/privacy`);
  return res;
};

const getContact = () => {
  const res = url.get(`/contact`);
  return res;
};
const postContact = (form) => {
  const res = url.post(`/contactus`, form);
  return res;
};

const getSocial = () => {
  const res = url.get(`/social-media`);
  return res;
};

const getFAQ = () => {
  const res = url.get(`/faq`);
  return res;
};

const getTermsCondition = () => {
  const res = url.get(`/terms-condition`);
  return res;
};

const getAboutUs = () => {
  return url.get(`/aboutus`);
};

const postBookings = (form) => {
  return url.post("/booking", form);
};

export {
  getAboutUs,
  getServiceCategories,
  getGallery,
  getFAQ,
  getBlogs,
  getPrivacy,
  getContact,
  getSocial,
  getTermsCondition,
  postContact,
  postBookings,
};
