import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import TableRow from "@/components/TableRow";
import { LeaderBoardResponse } from "@/types";
import Image from "next/image";

export default async function Speed() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT!}/items/game?filter[Gamemode][_eq]=Speed&limit=10&sort[]=-FinalScore`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  const { data } = (await res.json()) as LeaderBoardResponse;
  return (
    <main className="px-[55px] max-lg:px-[20px] pt-[50px] max-lg:pt-[20px] min-h-[100dvh] flex flex-col">
      <div className="grid grid-cols-[1fr,1.2fr] max-lg:flex max-lg:flex-col max-lg:gap-[40px] gap-[140px] flex-grow">
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
          />{" "}
          <div className="mt-auto mb-[50px] max-lg:mt-0 max-lg:mb-0 w-full">
            <Option>
              <svg
                width="176"
                height="24"
                viewBox="0 0 176 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_7)">
                  <path
                    d="M61.3182 5.9892H63.4161C65.7111 5.9892 67.091 7.09232 67.091 8.94004C67.091 9.87769 66.7249 12.0701 63.3457 12.0701H61.3182V5.9892ZM67.2318 22.8393L67.3163 22.9358H72.8919C72.8919 22.9358 67.6823 15.6277 67.4993 15.3795C71.1883 14.428 72.5399 11.2842 72.5399 8.62289C72.5399 6.20982 71.5121 3.9898 69.8084 2.66606C68.4286 1.6181 66.9924 1.09412 62.9374 1.09412H55.8833V22.9358H61.3182V13.3525C61.4167 13.5042 66.0209 21.1571 67.2459 22.8255"
                    fill="black"
                  />
                  <path
                    d="M85.4797 4.9137C88.4224 4.9137 90.0839 6.76142 90.7034 7.46465L91.0131 7.80938H96.5466L95.7863 6.51322C95.209 5.54799 94.3501 4.07257 92.3367 2.66609C89.5911 0.70806 86.592 0.515015 85.4234 0.515015C78.9888 0.515015 73.7651 5.63072 73.7651 11.9323C73.7651 18.2338 78.9747 23.515 85.3952 23.515C89.7037 23.515 93.5475 21.3226 95.6736 17.6271L96.3776 16.3999H90.7738L90.5203 16.6895C89.1687 18.2476 87.3101 19.1301 85.4234 19.1301C81.6781 19.1301 78.5101 15.8483 78.5101 11.9736C78.5101 8.09895 81.6359 4.92748 85.4797 4.92748"
                    fill="black"
                  />
                  <path
                    d="M112.499 21.4604C114.048 20.0126 114.836 17.9718 114.836 15.6277V1.1355H110.936V15.5312C110.936 19.4748 107.571 19.9023 106.769 19.9023C106.065 19.9023 102.601 19.4748 102.601 15.5312V1.1355H98.7148V15.6277C98.7148 17.9718 99.4892 20.0126 101.024 21.4467C102.573 22.7014 104.84 23.4598 106.783 23.4598C108.726 23.4598 111.007 22.7014 112.527 21.4604"
                    fill="black"
                  />
                  <path
                    d="M121.848 12.208V4.23801H125.101C128.607 4.23801 129.846 6.33393 129.846 8.1265C129.846 10.8016 127.79 12.2218 123.918 12.2218H121.834L121.848 12.208ZM133.309 8.11271C133.309 6.08573 132.549 4.14148 131.254 2.94184C129.888 1.67326 128.057 1.10791 125.326 1.10791H118.413V22.8669H121.862V13.3111C122.285 13.8489 129.409 22.8669 129.409 22.8669H133.746C133.746 22.8669 127.438 15.1864 127.156 14.8279C128.311 14.7314 133.323 14.0282 133.323 8.11271"
                    fill="black"
                  />
                  <path
                    d="M139.998 1.08032H136.815V22.9083H139.998V1.08032Z"
                    fill="black"
                  />
                  <path
                    d="M148.403 13.7938C148.628 13.2146 151.74 5.06533 152.148 4.01737C152.557 5.06533 155.696 13.2146 155.922 13.7938H148.403ZM150.712 1.08032L142.095 22.8945H144.869C144.869 22.8945 147.361 16.4826 147.474 16.193H156.837C156.95 16.4826 159.4 22.8945 159.4 22.8945H162.244L153.669 1.08032H150.712Z"
                    fill="black"
                  />
                  <path
                    d="M166.876 20.6607V1.08032H164.68V22.7704H176V20.6607H166.876Z"
                    fill="black"
                  />
                  <path
                    d="M38.0301 22.9358H50.7021V22.9496H52.2087V17.8063H45.6896V14.4832H52.0116V9.89145H45.6896V6.44421H52.2087V1.02515H38.002L44.1972 12.0012L38.0301 22.9358Z"
                    fill="black"
                  />
                  <path
                    d="M36.8333 1.02515H31.8208L38.0019 12.0012L31.849 22.9358H36.8614L43.0144 12.0012L36.8333 1.02515Z"
                    fill="black"
                  />
                  <path
                    d="M26.1043 22.9358H30.6803L36.8333 12.0012L30.6522 1.02515H27.5123L21.641 11.2152V1.02515H13.9251L0 22.9358H9.0112C9.53216 22.0395 14.615 13.3663 14.9952 12.7871V22.9358H21.0918C21.5002 22.1498 24.8653 15.7793 26.0902 13.5593V22.9358H26.1043Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_7">
                    <rect
                      width="176"
                      height="23"
                      fill="white"
                      transform="translate(0 0.515015)"
                    />
                  </clipPath>
                </defs>
              </svg>
              SPEED TRIAL
            </Option>
          </div>
        </div>
        <div className="flex flex-col max-lg:gap-[25px] max-lg:flex-grow">
          <div className="flex flex-col text-[20.825px] gap-[27px] max-sm:gap-[8px] leading-none font-bold max-sm:tracking-[0.12px] tracking-[0.208px] uppercase font-helvetica">
            <div className="flex items-center gap-[24px] justify-between max-sm:text-[12px]">
              <div className="flex gap-[125px] max-lg:gap-[24px] items-center">
                <span className="w-[50px] max-sm:hidden">NR.</span>
                <span>NAME</span>
              </div>
              <span>SCORE</span>
            </div>
            <div className="border-t-[1.5px] border-t-black">
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  name={item.Name}
                  number={index + 1}
                  score={item.FinalScore}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-[16px] mt-auto">
            <NavBtn text="PREVIOUS" link="/precision" active={true} />
            <NavBtn text="NEXT" link="/touch" active={true} />
          </div>
        </div>
      </div>
      <footer className="flex py-[34px] max-sm:py-[17px] max-lg:mt-[25px] mt-auto justify-between items-center font-futura text-[25.83px] max-sm:text-[12px] tracking-[-1.291px] max-sm:tracking-[-0.6px]">
        <span>HOME OF FOOTBALL</span>
        <span>MAD BRILLIANCE TRIAL</span>
      </footer>
    </main>
  );
}
