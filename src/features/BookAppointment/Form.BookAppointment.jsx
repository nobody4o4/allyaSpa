import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function FormBookAppointment() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectedTime, setSelectedTime] = useState("08:00");

  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.address) {
      errors.address = "Required";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="col-span-full py-6 px-4 sm:py-6 lg:col-span-6 lg:py-12">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
          Book Appointment
          <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Cena"
                  className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Field
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="98XXXXXXX"
                  className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
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
                  className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
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
                  className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Date Range
                </label>
                <DateRangePicker
                  ranges={dateRange}
                  onChange={handleDateSelect}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <select
                  name="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  {[...Array(13).keys()].map((hour) => {
                    const paddedHour = hour.toString().padStart(2, "0");
                    return (
                      <option
                        key={paddedHour}
                        value={`${paddedHour}:00`}
                      >{`${paddedHour}:00`}</option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
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
