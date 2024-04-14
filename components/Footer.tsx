import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Footer sections data
  const footerSections = [
    {
      title: "Resources",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Our Mission", url: "/mission" },
        { text: "Get Involved", url: "/get-involved" }
      ],
      description: "Learn more about the Bharatiya Liberal Party, our mission, and how you can contribute to political reform in India."
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms & Conditions", url: "/terms" }
      ],
      description: "Review our legal policies, terms and conditions, and privacy practices to understand your rights and responsibilities as a visitor."
    }
  ];

  // Social links data
  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/YourBLPPage" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com/YourBLPPage" }
  ];

  return (
    <footer className="bg-slate-100 text-gray-700 pt-10 pb-5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between flex-wrap">
          <div className="w-full lg:w-auto mb-[4rem] lg:mb-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="Bharatiya Liberal Party Logo"
                  className="h-12 mr-3"
                />
                <span className="text-2xl font-semibold whitespace-nowrap">
                  Bharatiya Liberal Party
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[2rem]">
            {footerSections.map((section, index) => (
              <div key={index} className="text-sm">
                <h2 className="mb-2 text-lg font-semibold text-gray-800 uppercase">
                  {section.title}
                </h2>
                <p className="mb-4 text-gray-500">
                  {section.description}
                </p>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link href={link.url}>
                        <span className="hover:underline text-blue-600">
                          {link.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <Link href="/">
              <span className="hover:underline text-blue-600">
                Bharatiya Liberal Party™
              </span>
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialLinks.map((socialLink, index) => (
              <Link key={index} href={socialLink.url}>
                <div className="text-gray-500 hover:text-blue-600">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={getSocialIcon(socialLink.icon)} />
                  </svg>
                  <span className="sr-only">{socialLink.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const getSocialIcon = (iconName:any) => {
  switch (iconName) {
    case "facebook":
      return "M18 0h-12c-3.313708 0-6 6v12c3.313708 6 6 6h12c3.313708 0 6-6 6-6v-12c0-3.313708-6-6-6-6zm-4 15h-2v-5h-2v-2h2v-1.5c0-1.654412 3-3 3-3h2v2h-2c-1 1 1 1.5 1 1.5h3l-.5 2h-2.5v5z";
    case "twitter":
      return "M23.953 4.569c-0.885 0.392-1.83 0.656-2.825 0.774 1.015-0.609 1.794-1.574 2.163-2.723-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-2.718 0-4.92 2.203-4.92 4.92 0 0.386 0.045 0.761 0.126 1.12-4.09-0.205-7.719-2.164-10.148-5.144-0.423 0.728-0.666 1.575-0.666 2.476 0 1.71 0.87 3.213 2.188 4.096-0.807-0.026-1.566-0.247-2.228-0.616v0.061c0 2.386 1.693 4.374 3.946 4.827-0.413 0.112-0.848 0.172-1.296 0.172-0.314 0-0.62-0.029-0.918-0.085 0.62 1.937 2.422 3.343 4.56 3.383-1.669 1.307-3.778 2.086-6.065 2.086-0.394 0-0.783-0.023-1.165-0.068 2.162 1.386 4.729 2.194 7.486 2.194 8.981 0 13.887-7.436 13.887-13.884 0-0.211-0.005-0.422-0.014-0.632 0.954-0.689 1.783-1.55 2.441-2.533z";
    default:
      return ""; // Return an empty string if no icon matches
  }
};

export default Footer;
