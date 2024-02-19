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
      </label>
    </div>
  );
}

export default ServiceCard;
