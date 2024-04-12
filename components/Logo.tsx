import Image from "next/image";
import logo from "../public/logo.png"

const Logo = () => {
  return (
    <div className="flex-shrink-0 relative w-[6rem] h-[6rem]  mt-6">
      <Image
        fill
        src={logo}
        alt="Workflow"
      />
    </div>
  );
};

export default Logo;
