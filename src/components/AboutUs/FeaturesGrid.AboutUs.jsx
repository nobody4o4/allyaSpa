const Feature = ({ features }) => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="row-gap-8 sm:row-gap-0 grid sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border-b p-8 sm:border-b ${
              index % 3 === 2 ? "lg:border-r-0" : "lg:border-r"
            } `}
          >
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-16 sm:w-16">
                <svg
                  className="text-deep-purple-accent-400 h-8 w-8 sm:h-12 sm:w-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">{feature.title}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
