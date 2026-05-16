export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-green-200 blur-3xl dark:bg-green-900" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-200 blur-3xl dark:bg-emerald-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-green-600 uppercase dark:text-green-400">
          Full-Stack Software Agency
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          We Build Software That{" "}
          <span className="text-green-600 dark:text-green-400">
            Drives Growth
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
          From concept to deployment, we deliver powerful web and mobile
          solutions that scale your business and outperform the competition.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 size-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-lg border-2 border-green-600 px-8 py-3.5 text-sm font-semibold text-green-600 transition-all hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
