import ServiceCategory from "./ServiceCategory.BookA";

function SelectService() {
  return (
    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-6 lg:col-span-4 lg:py-12">
      <h1 className="text-2xl font-medium text-gray-700 z-10 sm:text-3xl pb-8">
        Book Appointment
        <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
      </h1>
      <div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-300 to-teal-500 opacity-95"></div>
      </div>
      <ServiceCategory />
      <ServiceCategory />
      <ServiceCategory />
      <ServiceCategory />
      <ServiceCategory />
    </div>
  );
}
export default SelectService;
