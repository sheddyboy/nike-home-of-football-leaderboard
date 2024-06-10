import { MouseEventHandler } from "react";

interface OptionProps {
  children: React.ReactNode;
}

export default function Option({ children }: OptionProps) {
  return (
    <div className="max-sm:h-[122px] relative h-[241.56px] w-full opacity-100 flex items-center justify-center text-center uppercase">
      <div className="absolute inset-0 border-black border-opacity-0">
        <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-black"></div>
        <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-black"></div>
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-black"></div>
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-black"></div>
      </div>
      <span className="max-sm:text-[30px] max-sm:gap-[2.75px] max-sm:tracking-[-1.5px] text-[75px] leading-[95%] tracking-[-3.75px] uppercase font-futura flex flex-col justify-center items-center gap-[5px]">
        {children}
      </span>
    </div>
  );
}
