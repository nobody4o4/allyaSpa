function ServiceCard() {
  return (
    <div>
      <label className="service-card-label flex justify-between items-center">
        <input type="radio" name="service" className="hidden" />
        <div className="inline-flex items-center">
          <img
            src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="max-h-16"
          />
          <div className="ml-3">
            <p className="text-base font-semibold text-white">
              Nano Titanium Hair Dryer
            </p>
            <p className="text-sm font-medium text-white text-opacity-80">
              Pdf, doc Kindle
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-white">$260.00</p>
        <button className="group hover:bg-white border border-white  hover:border hover:border-teal-300  hover:  flex cursor-pointer select-none items-center justify-center rounded-md bg-teal-300 px-1 text-white transition">
          <a
            href="#"
            className="group  group-hover:text-teal-300 flex w-full items-center justify-center rounded py-1 text-center font-light"
          >
            Select
          </a>
        </button>
      </label>
    </div>
  );
}

export default ServiceCard;
