import { useFormik } from "formik";
import * as Yup from "yup";
import PostMain from "../../services/postMain.service";
import { useState } from "react";
import { postContact } from "../../endpoint/services.endpoint";

export default function ContactUsForm() {
  // const {jwt} = useSelector((state)=>state.user)

  const [mainData, setMainData] = useState({});

  const contactUsValidationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number("Phone Number must be on number").required(
      "Phone Number is required",
    ),
    message: Yup.string().required("Message is required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactUsValidationSchema,
    onSubmit: async (values) => {
      // await sendMessage(values);
      hehe(values);
      console.log("JAJAJAJ");
    },
  });

  const hehe = async (values) => {
    try {
      const response = await postContact(values);
      setMainData(response.data);
      console.log(data, "sca");
      resetForm();
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(mainData);

  return (
    <form className="my-4 flex flex-col gap-6 px-16" onSubmit={handleSubmit}>
      <div className="flex  w-full gap-10 ">
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-black"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.firstname && errors.firstname ? (
            <p className="text-red-600">{errors.firstname}</p>
          ) : null}
        </div>
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-black"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.lastname && errors.lastname ? (
            <p className="text-red-600">{errors.lastname}</p>
          ) : null}
        </div>
      </div>
      <div className="flex w-full gap-10">
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.email && errors.email ? (
            <p className="text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="phoneNumer"
            className="block text-sm font-medium text-black"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.phone && errors.phone ? (
            <p className="text-red-600">{errors.phone}</p>
          ) : null}
        </div>
      </div>
      <div className="flex w-full">
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black"
          >
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Write your message..."
            className=" w-full border-b-2 border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.message && errors.message ? (
            <p className="text-red-600">{errors.message}</p>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className=" w-fit rounded-md bg-secondaryColor p-3 px-8 text-sm font-semibold text-white duration-300 ease-in hover:scale-105"
        >
          <p>Send Message</p>
        </button>
      </div>
    </form>
  );
}
