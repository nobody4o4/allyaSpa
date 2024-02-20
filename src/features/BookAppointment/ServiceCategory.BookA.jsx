import ServiceCard from "./ServiceCard";
import { IoIosArrowDown } from "react-icons/io";

function ServiceCategory() {
  return (
    <div className="relative mx-auto w-full px-5 font-sans text-gray-800 sm:px-12 md:max-w-screen-lg mb-2">
      <div className="space-y-4">
        <label className="relative flex flex-col border-b-2 border-gray-100 pb-2">
          <input className="peer hidden" type="checkbox" id="accordion-1" />
          <div className="relative cursor-pointer select-none items-center p-2 flex justify-between">
            <h3 className="text-lg text-gray-600 lg:text-xl font-medium">
              Massage
            </h3>
            <IoIosArrowDown className="text-lg text-gray-600 lg:text-xl font-medium" />
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
            <div className="space-y-2 flex flex-col">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default ServiceCategory;
