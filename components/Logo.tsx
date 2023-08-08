import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex-shrink-0 relative w-8 h-8">
      <Image
        fill
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
    </div>
  );
};

export default Logo;
