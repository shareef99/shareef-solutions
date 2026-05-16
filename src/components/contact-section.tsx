export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-28 dark:bg-gray-950"
      aria-label="Contact us"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-green-600 uppercase dark:text-green-400">
              Get In Touch
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Ready to take your business to the next level? Reach out and
              let&apos;s discuss how we can help.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                }
                label="Email"
                value="nadeemshareef934@gmail.com"
              />
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                }
                label="Phone"
                value="+91 7815837564"
              />
              <ContactItem
                icon={
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </>
                }
                label="Location"
                value="Talab Katta, Bhavani Nagar, Hyderabad, Telangana, India"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-green-400"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-green-400"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-green-400"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-green-50 p-2.5 text-green-600 dark:bg-green-950 dark:text-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          {icon}
        </svg>
      </div>
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{value}</p>
      </div>
    </div>
  );
}
