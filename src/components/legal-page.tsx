import { Link } from "@tanstack/react-router";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-8 text-gray-600 dark:text-gray-400 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-gray-900 dark:[&_h3]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-green-600 [&_a]:underline dark:[&_a]:text-green-400">
          {children}
        </div>
      </div>
    </div>
  );
}
