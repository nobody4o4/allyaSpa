import Button from "./Button";

function Booking() {
  return (
    <div className="px-4 py-4 bg-white mx-32  max-md:px-5">
      <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col  max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <h1 className="text-4xl font-bold tracking-wider text-teal-400 max-md:max-w-full max-md:text-4xl">
              Rejuvenate Your Body and Mind
            </h1>
            <p className="mt-2.5 text-xl text-black max-md:max-w-full">
              Treat yourself to the ultimate relaxation experience at our spa.
              <br /> Booking an appointment is your first step towards unwinding
              and revitalizing your senses.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <Button title="Book Now" />
        </div>
      </header>
    </div>
  );
}

export default Booking;
