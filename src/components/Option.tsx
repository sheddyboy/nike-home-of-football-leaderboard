import { MouseEventHandler } from "react";

interface OptionProps {
  children: React.ReactNode;
}

export default function Option({ children }: OptionProps) {
  return (
    <div className="relative flex h-[241.56px] w-full items-center justify-center text-center uppercase opacity-100 max-sm:h-[122px]">
      <div className="absolute inset-0 border-black border-opacity-0">
        <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-black"></div>
        <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-black"></div>
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-black"></div>
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-black"></div>
      </div>
      <span className="flex flex-col items-center justify-center gap-[5px] font-futura text-[75px] uppercase leading-[95%] tracking-[-3.75px] max-sm:gap-[2.75px] max-sm:text-[30px] max-sm:tracking-[-1.5px]">
        {children}
      </span>
    </div>
  );
}
