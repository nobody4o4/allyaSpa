import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUsForm() {
  // const {jwt} = useSelector((state)=>state.user)

  const contactUsValidationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.number("Phone Number must be on number").required(
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: contactUsValidationSchema,
    onSubmit: async (values) => {
      // await sendMessage(values);
    },
  });

  // const sendMessage=async(form)=>{
  //     try{
  //         const res = await sendContactUsMail(hotel_id,form,jwt)
  //         console.log(res.data);
  //         toast.success(res.data.message)
  //         resetForm()
  //     }catch(e){
  //         console.log(e);
  //         toast.error(e.response.data.message)
  //     }
  // }

  return (
    <form className="flex flex-col gap-6 px-16" onSubmit={handleSubmit}>
      <div className="flex  w-full gap-10 ">
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-black"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.firstName && errors.firstName ? (
            <p className="text-red-600">{errors.firstName}</p>
          ) : null}
        </div>
        <div className="h-[6rem] flex-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-black"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.lastName && errors.lastName ? (
            <p className="text-red-600">{errors.lastName}</p>
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
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-b-2  border-gray-400 pb-2  pt-2 text-black outline-none transition focus:border-black"
          />
          {touched.phoneNumber && errors.phoneNumber ? (
            <p className="text-red-600">{errors.phoneNumber}</p>
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
