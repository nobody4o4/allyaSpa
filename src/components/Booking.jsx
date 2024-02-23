import Button from "./Button";

function Booking() {
  return (
    <div className="flex justify-center">
      <div className="px-4 py-6 bg-white mx-4 md:mx-0 md:px-5 rounded-2xl shadow-md max-w-screen-md">
        <header className="flex  md:items-center md:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-wide text-teal-400 md:text-3xl lg:text-4xl">
                Rejuvenate Your Body and Mind
              </h1>
              <p className="mt-2.5 text-xs md:text-sm lg:text-base text-black">
                Treat yourself to the ultimate relaxation experience at our spa.
                <br /> Booking an appointment is your first step towards unwinding
                and revitalizing your senses.
              </p>
            </div>
          </div>
          <div className=" mt-5 ">
            <Button title="Book Now" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Booking;
