// Skeleton for the restaurant menu page (name, cuisine line, category accordions).
// Uses the same `animate-shimmer` keyframes you already added to Tailwind.

const Bar = ({ className = "" }) => (
  <div
    className={`animate-shimmer motion-reduce:animate-none bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] ${className}`}
  />
);

// Widths vary per row so the list feels like real, differently-named categories
const ROWS = [
  "w-28",
  "w-36",
  "w-48",
  "w-32",
  "w-24",
  "w-44",
  "w-40",
  "w-52",
  "w-28",
  "w-36",
];

const MenuShimmer = () => {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-8"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Restaurant heading */}
      <div className="flex flex-col items-center gap-3">
        <Bar className="h-6 w-56 rounded-md sm:w-72" />
        <Bar className="h-3.5 w-44 rounded sm:w-60" />
      </div>

      {/* Category accordions */}
      <div className="mt-8 space-y-3">
        {ROWS.map((width, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-4 shadow-sm ring-1 ring-gray-100"
            style={{ opacity: 1 - i * 0.05 }} // gentle fade toward the bottom
          >
            <div className="flex items-center gap-2">
              <Bar className={`h-4 rounded ${width}`} />
              <Bar className="h-4 w-5 rounded" />
            </div>

            {/* Chevron placeholder */}
            <Bar className="h-5 w-5 rounded-md" />
          </div>
        ))}
      </div>

      {/* Loading text */}
      <div className="flex flex-col items-center py-10">
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

        <p className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-base font-semibold tracking-wide text-transparent">
          Setting the table
          <span className="ml-0.5 inline-flex">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </p>
        <p className="mt-1 text-xs text-gray-400">Loading the menu for you</p>
      </div>
    </div>
  );
};

export default MenuShimmer;
