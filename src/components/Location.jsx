function Location() {
  return (
    <section className="flex flex-col justify-center  pb-12 pt-8 bg-white max-md:px-5 mx-32">
      <h1 className="text-5xl font-bold text-black tracking-[2px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Location
      </h1>
      <div className="mt-4 max-w-full w-full flex">
        <div className="flex w-1/2 gap-5 max-md:flex-col max-md:gap-0 items-center ">
          <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl tracking-wider max-md:mt-10">
              <h2 className="font-medium">Address:</h2>
              <div className="mt-2.5 text-xl font-light">
                Street No. 11, Lakeside <br /> Pokhara, Nepal
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl tracking-wider max-md:mt-10">
              <h2 className="font-medium">Contact Info:</h2>
              <div className="mt-2.5 text-xl font-light">
                +977 9834567899,
                <br /> +061 573955 <br /> info@allyaspa.com.np
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14063.187978270771!2d83.9875144!3d28.2134797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595acf47c0b65%3A0x37d1e590f8a5d50e!2sWebsoft%20Technology%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1707893965304!5m2!1sen!2snp"
        allowfullscreen=""
        className="self-stretch mt-10 w-4/5 aspect-[2.5] max-md:mt-10 max-md:max-w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
