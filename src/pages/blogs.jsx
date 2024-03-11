import React from "react";
import bill from "../assets/bill.png";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="relative">
      <img
        src={bill}
        alt="Banner"
        className="flex h-[25rem] w-full flex-col items-center justify-center object-cover"
      />
      <div className="absolute top-44 flex w-full justify-center">
        <h1 className="text-5xl font-bold text-white">Blogs</h1>
      </div>
      <div className="grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((blog) => (
          <Link
            to={"/blogs/1"}
            class="group relative m-10 h-96 w-96 cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <div class="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
              <img
                class="h-4/6 w-full object-cover"
                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <h1 class="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                Portugal's Hot Baloon Festival
              </h1>
              <p class="mt-1 px-4 text-center text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, saepe.
              </p>
            </div>

            <div class="absolute -bottom-96 left-0 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
              <h1 class="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
                Portugal's Hot Baloon Festival
              </h1>
              <p class="px-8 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                deserunt quisquam aperiam, voluptas esse minima. Tenetur odit
                rem ducimus incidunt quas, voluptates obcaecati, sint amet sit
                provident quis nam repellat, odio repellendus recusandae. Error,
                repudiandae?
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
