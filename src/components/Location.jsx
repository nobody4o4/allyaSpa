import { getContact } from "../endpoint/services.endpoint";
import FetchMain from "../services/fetchMain.service";

function Location() {
  const { data } = FetchMain(getContact);
  console.log(data);
  return (
    <section className="flex flex-col justify-center  bg-white pb-12 pt-8 max-md:px-5 md:mx-24  lg:mx-32">
      <h1 className="text-4xl font-bold tracking-[2px] text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Location
      </h1>
      <div className=" flex w-full max-w-full flex-row lg:mt-4">
        <div className="flex w-1/2  gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex w-1/2 flex-col max-md:ml-0 max-md:w-full">
            <div className=" flex grow flex-col text-2xl tracking-wider max-md:mt-10">
              <h2 className="font-medium">Address:</h2>
              <div className="mt-2.5 text-xl font-light">
                {data?.address} <br /> Pokhara, Nepal
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-1/2 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow flex-col text-2xl tracking-wider max-md:mt-10">
              <h2 className="font-medium">Contact Info:</h2>
              <div className="mt-2.5 text-xl font-light">
                {data?.phone},
                <br /> {data?.tel} <br /> {data?.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14063.187978270771!2d83.9875144!3d28.2134797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595acf47c0b65%3A0x37d1e590f8a5d50e!2sWebsoft%20Technology%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1707893965304!5m2!1sen!2snp"
        allowfullscreen=""
        className="mt-10 aspect-[2.5] w-4/5 self-stretch max-md:mt-10 max-md:max-w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
