const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "8+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Team Members" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900"
      aria-label="About us"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-green-600 uppercase dark:text-green-400">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              We Don&apos;t Just Write Code.
              <br />
              We Build Futures.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Shareef Solutions is a full-stack software agency that partners
              with ambitious businesses to turn bold ideas into powerful digital
              products. We bring together world-class developers, designers, and
              strategists under one roof.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Every line of code we write is driven by one goal: delivering
              measurable impact for your business. No fluff. No shortcuts. Just
              results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800"
              >
                <p className="text-3xl font-extrabold text-green-600 sm:text-4xl dark:text-green-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
