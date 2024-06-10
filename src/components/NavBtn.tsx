import Link from "next/link";
import { MouseEventHandler } from "react";

interface NavBtnProps {
  text: string;
  link: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function NavBtn({ text, link, active, onClick }: NavBtnProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        !active && "pointer-events-none opacity-20"
      } w-[50%] max-w-[202px] border-t-[1.5px] border-t-black text-center font-helvetica text-[20.825px] font-bold leading-[95%] tracking-[0.208px] max-sm:max-w-[105px] max-sm:text-[12px] max-sm:tracking-[0.12px]`}
    >
      <Link
        href={link}
        className="flex items-center justify-center pt-[25px] max-sm:pt-[10px]"
      >
        {text}
      </Link>
    </div>
  );
}
