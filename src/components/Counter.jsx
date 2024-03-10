import { FaAward, FaRegUser, FaSpa } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

function Counter() {
  return (
    <div>
      <section className="body-font text-gray-400">
        <div className="container mx-auto px-5 pb-24 pt-10">
          <div className="-m-4 flex flex-wrap text-center">
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div className="rounded-t-lg border-b-2 border-gray-400 bg-cyan-100 px-4 py-6">
                <FaRegUser className="mb-3 inline-block h-12 w-12 font-light text-primaryColor" />
                <h2 className="title-font text-3xl font-medium text-black">
                  2.7K
                </h2>
                <p className="leading-relaxed">Happy Users</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div className="rounded-t-lg border-b-2 border-gray-400 bg-cyan-100 px-4 py-6">
                <FaSpa className="mb-3 inline-block h-12 w-12 font-light text-primaryColor" />
                <h2 className="title-font text-3xl font-medium text-black">
                  1.3K
                </h2>
                <p className="leading-relaxed"> Services</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div className="rounded-t-lg border-b-2 border-gray-400 bg-cyan-100 px-4 py-6">
                <GrValidate className="mb-3 inline-block h-12 w-12 font-light text-primaryColor" />
                {/* <FaSpa className="mb-3 inline-block h-12 w-12 font-light text-primaryColor" /> */}
                <h2 className="title-font text-3xl font-medium text-black">
                  4 YEARS
                </h2>
                <p className="leading-relaxed">of Experience</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div className="rounded-t-lg border-b-2 border-gray-400 bg-cyan-100 px-4 py-6">
                <FaAward className="mb-3 inline-block h-12 w-12 font-light text-primaryColor" />
                {/* className="mb-3 inline-block h-12 w-12 text-primaryColor" */}
                <h2 className="title-font text-3xl font-medium text-black">
                  46
                </h2>
                <p className="leading-relaxed">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Counter;
