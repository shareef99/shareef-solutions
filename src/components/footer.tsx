import { Link } from "@tanstack/react-router";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Support", to: "/support" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund Policy", to: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              Shareef<span className="text-green-600"> Solutions</span>
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Full-stack software agency building powerful digital solutions.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Navigation
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Legal
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Shareef Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
