import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as Yup from "yup";
import { postBookings } from "../../endpoint/services.endpoint";

function FormBookAppointment() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10),
  ); // Initialize with current date

  const [selectedTime, setSelectedTime] = useState("08:00");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    console.log(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log(e.target.value);
  };
  const serv = "massage";

  const initialValues = {
    name: "",
    number: "",
    email: "",
    address: "",
    date: selectedDate,
    time: selectedTime,
    service: serv,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // Handle form submission logic here
    try {
      console.log(values);
      const res = await postBookings(values);
      console.log(res.data);
      setSubmitting(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div className="col-span-full px-4 py-6 sm:py-6 lg:col-span-6 lg:py-12">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
          Book Appointment
          <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string().required("Full name is Required"),
            number: Yup.string().required("Phone number is Required"),
            date: Yup.date().required("Please select a date"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is Required"),
            address: Yup.string().required("Address is Required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Cena"
                  className="block w-full rounded-md border border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Field
                  type="number"
                  id="number"
                  name="number"
                  placeholder="98XXXXXXX"
                  className="block w-full rounded-md border border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm outline-none [appearance:textfield] focus:z-10 focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johncena@gmail.com"
                  className="block w-full rounded-md border border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Lakeside,Pokhara-6"
                  className="block w-full rounded-md border border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <Field
                  placeholder="Date"
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="rounded-md border border-black p-2 outline-none"
                ></Field>
                {/* <DateRangePicker
                  ranges={dateRange}
                  onChange={handleDateSelect}
                /> */}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <select
                  name="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="block w-full rounded-md border border-gray-200 px-4 py-3 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  {[...Array(12).keys()].map((hour) => {
                    const paddedHour = (hour + 1).toString().padStart(2, "0");
                    return (
                      <option
                        key={paddedHour + "AM"}
                        value={`${paddedHour}:00 AM`}
                      >{`${paddedHour}:00 AM`}</option>
                    );
                  })}
                  {[...Array(12).keys()].map((hour) => {
                    const paddedHour = (hour + 1).toString().padStart(2, "0");
                    return (
                      <option
                        key={paddedHour + "PM"}
                        value={`${paddedHour}:00 PM`}
                      >{`${paddedHour}:00 PM`}</option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 px-4 py-2.5 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                {isSubmitting ? "Submitting..." : "Place Order"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-10 text-center text-sm font-semibold text-gray-500">
          By placing this order you agree to the{" "}
          <a
            href="#"
            className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
          >
            Terms and Conditions
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormBookAppointment;
