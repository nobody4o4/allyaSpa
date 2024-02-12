function Button() {
  return (
    <>
      <button className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
        <a
          href="#"
          className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"
        >
          Shop now
        </a>
        <svg
          className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </>
  );
}

export default Button;
