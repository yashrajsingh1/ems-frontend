import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="relative text-black/80 font-semibold tracking-wide hover:text-black/60  group"
    >
      {label}
      <span className="absolute bg-pink-500 h-px w-0 left-0 bottom-[-10px] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
