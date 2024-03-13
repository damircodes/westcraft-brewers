import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerNavigation = {
  main: [
    { name: "Blog", href: "" },
    { name: "Jobs", href: "" },
    { name: "Press", href: "" },
    { name: "Accessibility", href: "" },
    { name: "Partners", href: "" },
  ],
  social: [
    { name: "Facebook", href: "", icon: FaFacebook },
    { name: "Instagram", href: "", icon: FaInstagram },
    { name: "Twitter", href: "", icon: FaTwitter },
    { name: "YouTube", href: "", icon: FaYoutube },
  ],
};

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="mx-auto text-white mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-white hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent
                  className="h-6 w-6 custom-class"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-200">
          &copy; 2023 Westcraft California, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
