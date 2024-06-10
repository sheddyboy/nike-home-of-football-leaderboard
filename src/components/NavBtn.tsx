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
      } border-t-[1.5px] font-helvetica max-w-[202px] max-sm:max-w-[105px] w-[50%] font-bold text-[20.825px] max-sm:text-[12px] leading-[95%] tracking-[0.208px] max-sm:tracking-[0.12px] border-t-black text-center`}
    >
      <Link
        href={link}
        className="flex justify-center items-center pt-[25px] max-sm:pt-[10px]"
      >
        {text}
      </Link>
    </div>
  );
}
