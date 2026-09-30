const Shimmer = () => {
  return (
    <div className="px-2 py-6">
      {/* Shimmer Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-gray-100 shadow-sm"
          >
            {/* Image */}
            <div
              className="
                h-36 w-full
                animate-shimmer
                bg-linear-to-r
                from-gray-200
                via-gray-100
                to-gray-200
                bg-size-[200%_100%]
              "
            />

            {/* Content */}
            <div className="space-y-2 p-3">
              {/* Restaurant name */}
              <div
                className="
                  h-4 w-3/4 rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />

              {/* Cuisine */}
              <div
                className="
                  h-3 w-full rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />

              {/* Rating */}
              <div
                className="
                  h-3 w-2/5 rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />

              {/* Delivery time */}
              <div
                className="
                  h-3 w-1/2 rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />

              {/* Price */}
              <div
                className="
                  h-3 w-3/5 rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />

              {/* User */}
              <div
                className="
                  h-3 w-2/5 rounded
                  animate-shimmer
                  bg-linear-to-r
                  from-gray-200 via-gray-100 to-gray-200
                  bg-size-[200%_100%]
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center justify-center py-10">
        {/* Spinner */}
        <div className="relative mb-4 h-10 w-10">
          <div className="absolute inset-0 rounded-full border-4 border-orange-100" />

          <div
            className="
              absolute inset-0
              rounded-full
              border-4
              border-transparent
              border-t-orange-500
              animate-spin
            "
          />

          <div className="absolute inset-2 rounded-full bg-orange-50" />
        </div>

        {/* Text */}
        <p className="text-sm font-semibold tracking-wide text-gray-700">
          Finding delicious places for you
          <span className="inline-flex ml-1">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Please wait while we fetch the restaurants
        </p>
      </div>
    </div>
  );
};

export default Shimmer;
