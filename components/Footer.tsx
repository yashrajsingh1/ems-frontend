import React from "react";

const Footer = () => {
  // Footer sections data
  const footerSections = [
    {
      title: "Resources",
      links: [
        { text: "Flowbite", url: "https://flowbite.com/" },
        { text: "Tailwind CSS", url: "https://tailwindcss.com/" }
      ]
    },
    {
      title: "Follow us",
      links: [
        { text: "Github", url: "https://github.com/themesberg/flowbite" },
        { text: "Discord", url: "https://discord.gg/4eeurUVvTy" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms & Conditions", url: "#" }
      ]
    }
  ];

  // Social links data
  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "GitHub", icon: "github", url: "#" },
    { name: "Dribbble", icon: "dribbble", url: "#" }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Map over footer sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {/* Map over links in each section */}
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <a href={link.url} className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Copyright */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          {/* Social links */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Map over social links */}
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {/* Render social icon dynamically */}
                  <path d={getSocialIcon(socialLink.icon)} />
                </svg>
                <span className="sr-only">{socialLink.name} page</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Function to get social icon path based on icon name
const getSocialIcon = (iconName:string) => {
  switch (iconName) {
    case "facebook":
      return "path to facebook icon";
    case "twitter":
      return "path to twitter icon";
    case "github":
      return "path to github icon";
    case "dribbble":
      return "path to dribbble icon";
    default:
      return "";
  }
};

export default Footer;
