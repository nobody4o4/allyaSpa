import ServiceCard from "./ServiceCard";
import { IoIosArrowDown } from "react-icons/io";

function SelectServiceCategory() {
  return (
    <div className="relative mx-auto mb-2 w-full px-5 font-sans text-gray-800 sm:px-12 md:max-w-screen-lg">
      <div className="space-y-4">
        <label className="relative flex flex-col border-b-2 border-gray-100 pb-2">
          <input className="peer hidden" type="checkbox" id="accordion-1" />
          <div className="relative flex cursor-pointer select-none items-center justify-between p-2">
            <h3 className="text-lg font-medium text-gray-600 lg:text-xl">
              Massage
            </h3>
            <IoIosArrowDown className="text-lg font-medium text-gray-600 lg:text-xl" />
          </div>
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
            <div className="flex flex-col space-y-2">
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

export default SelectServiceCategory;
