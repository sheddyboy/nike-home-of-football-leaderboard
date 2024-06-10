"use client";
import Option from "@/components/Option";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogoSection() {
  const pathName = usePathname() as "/touch" | "/speed" | "/precision";
  return (
    <div className="mb-[50px] mt-auto w-full max-lg:mb-0 max-lg:mt-0">
      <Option>
        {pathName === "/touch" && (
          <>
            <Image width={182} height={24} alt="logo" src="/tiempo.svg" />
            TOUCH TRIAL
          </>
        )}
        {pathName === "/speed" && (
          <>
            <Image width={176} height={24} alt="logo" src="/mercurial.svg" />
            SPEED TRIAL
          </>
        )}
        {pathName === "/precision" && (
          <>
            <Image width={200} height={24} alt="logo" src="/phantomgx.svg" />
            PRECISION TRIAL
          </>
        )}
      </Option>
    </div>
  );
}
