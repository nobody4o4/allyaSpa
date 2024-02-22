import React from "react";
import FAQ from "../assets/FAQ.png";
export default function Faq() {
  return (
    <>
      <div className="flex justify-around items-center px-44 bg-neutralColor">
        <div className="w-[50%] ">
          <h1 className="text-3xl font-semibold"> FAQs</h1>
          <p>
            If you have any further questions or concerns not addressed here,
            please don't hesitate to reach out to our knowledgeable staff. We're
            here to assist you every step of the way and ensure you have a
            blissful spa experience from start to finish.
          </p>
        </div>
        <img src={FAQ} className="w-[20rem] h-[20rem]"></img>
      </div>
      <div className="flex mx-56 my-10 gap-10  justify-between">
        <div className="w-[30%] text-secondaryColor font-semibold">
          <p>General Spa Information</p>
          <p>Booking and Reservations</p>
          <p>Spa Services</p>
          <p>Health and Safety</p>
        </div>
        <div className="flex flex-col gap-4  ">
          <section className="">
            <div className="container flex flex-col justify-center ">
              <h2 className="mb-2 text-4xl font-bold leadi  sm:text-5xl border-b pb-4 text-primaryColor">
                General Spa Information
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Optio maiores eligendi molestiae totam dolores similique?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Modi dolorem veritatis culpa quos consequuntur beatae itaque
                    excepturi perspiciatis?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Magni reprehenderit possimus debitis?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container flex flex-col justify-center ">
              <h2 className="mb-2 text-4xl font-bold leadi  sm:text-5xl border-b pb-4 text-primaryColor">
                General Spa Information
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Optio maiores eligendi molestiae totam dolores similique?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Modi dolorem veritatis culpa quos consequuntur beatae itaque
                    excepturi perspiciatis?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Magni reprehenderit possimus debitis?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container flex flex-col justify-center ">
              <h2 className="mb-2 text-4xl font-bold leadi  sm:text-5xl border-b pb-4 text-primaryColor">
                General Spa Information
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Optio maiores eligendi molestiae totam dolores similique?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Modi dolorem veritatis culpa quos consequuntur beatae itaque
                    excepturi perspiciatis?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Magni reprehenderit possimus debitis?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container flex flex-col justify-center ">
              <h2 className="mb-2 text-4xl font-bold leadi  sm:text-5xl border-b pb-4 text-primaryColor">
                General Spa Information
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Optio maiores eligendi molestiae totam dolores similique?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Modi dolorem veritatis culpa quos consequuntur beatae itaque
                    excepturi perspiciatis?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Magni reprehenderit possimus debitis?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
