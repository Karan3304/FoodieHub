import React from "react";

// Uses the same `animate-shimmer` keyframes you added for the other shimmers
const Bar = ({ className = "" }) => (
  <div
    className={`animate-shimmer motion-reduce:animate-none bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] ${className}`}
  />
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null, // null until the API responds
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://api.github.com/users/Karan3304");
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      this.setState({ userInfo: json });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  renderLoading() {
    return (
      <div role="status" aria-busy="true" className="px-6 pb-8">
        <div className="-mt-14 flex justify-center">
          <Bar className="h-28 w-28 rounded-full ring-4 ring-white" />
        </div>
        <div className="mt-5 flex flex-col items-center gap-3">
          <Bar className="h-6 w-40 rounded-md" />
          <Bar className="h-3.5 w-56 rounded" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <Bar className="h-12 rounded-lg" />
          <Bar className="h-12 rounded-lg" />
          <Bar className="h-12 rounded-lg" />
        </div>
        <Bar className="mt-6 h-11 w-full rounded-xl" />
      </div>
    );
  }

  renderProfile() {
    const {
      name,
      login,
      bio,
      avatar_url,
      html_url,
      public_repos,
      followers,
      following,
    } = this.state.userInfo;

    const stats = [
      { label: "Repos", value: public_repos },
      { label: "Followers", value: followers },
      { label: "Following", value: following },
    ];

    return (
      <div className="px-6 pb-8 text-center">
        <div className="-mt-14 flex justify-center">
          <img
            src={avatar_url}
            alt={`${name || login}'s avatar`}
            className="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white"
          />
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
          {name || login}
        </h2>
        <p className="mt-1 text-sm font-medium text-orange-600">@{login}</p>

        {bio && (
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
            {bio}
          </p>
        )}

        <dl className="mt-6 grid grid-cols-3 divide-x divide-orange-100 rounded-xl bg-orange-50/60 py-3">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <dd className="text-lg font-bold text-gray-900">{value}</dd>
              <dt className="text-xs text-gray-500">{label}</dt>
            </div>
          ))}
        </dl>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
        >
          <GithubIcon />
          View on GitHub
        </a>
      </div>
    );
  }

  render() {
    const { userInfo, error } = this.state;

    return (
      <div className="mx-auto my-10 w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-orange-100">
        {/* Banner */}
        <div className="h-28 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />

        {error ? (
          <div className="px-6 pb-8 pt-10 text-center">
            <p className="font-semibold text-gray-900">
              Couldn't load the profile
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Check your connection and refresh the page.
            </p>
          </div>
        ) : userInfo ? (
          this.renderProfile()
        ) : (
          this.renderLoading()
        )}
      </div>
    );
  }
}

export default UserClass;
