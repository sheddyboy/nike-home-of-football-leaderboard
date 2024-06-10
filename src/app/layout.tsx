import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

import "./globals.css";
import LogoSection from "@/components/LogoSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};
const helveticaFont = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica-neue-bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/helvetica-neue-regular.otf",
      weight: "400",
    },
  ],
  variable: "--helvetica",
});

const futura = localFont({
  src: "../../public/fonts/futura-std-extra-bold-condensed.otf",
  weight: "700",
  variable: "--futura",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futura.variable} ${helveticaFont.variable} bg-[url("/desktop_bg.jpg")] bg-cover bg-no-repeat`}
      >
        <main className="flex min-h-[100dvh] flex-col px-[55px] pt-[50px] max-lg:px-[20px] max-lg:pt-[20px]">
          <div className="grid flex-grow grid-cols-[1fr,1.2fr] gap-[140px] max-lg:flex max-lg:flex-col max-lg:gap-[40px]">
            <div className="flex flex-col max-lg:items-center max-lg:gap-[24px]">
              <Image
                src="/logo1.png"
                className="max-lg:hidden"
                alt="logo"
                width={580}
                height={400}
              />
              <Image
                src="/logo2.png"
                className="hidden max-lg:block"
                alt="logo"
                width={580}
                height={204}
              />
              <LogoSection />
            </div>
            {children}
          </div>
          <footer className="mt-auto flex items-center justify-between py-[34px] font-futura text-[25.83px] tracking-[-1.291px] max-lg:mt-[25px] max-sm:py-[17px] max-sm:text-[12px] max-sm:tracking-[-0.6px]">
            <span>HOME OF FOOTBALL</span>
            <span>MAD BRILLIANCE TRIAL</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
