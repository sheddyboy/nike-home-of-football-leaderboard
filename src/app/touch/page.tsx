import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import TableRow from "@/components/TableRow";
import { LeaderBoardResponse } from "@/types";
import Image from "next/image";

export default async function Touch() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT!}/items/game?filter[Gamemode][_eq]=Touch&limit=10&sort[]=-FinalScore`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  const { data } = (await res.json()) as LeaderBoardResponse;
  console.log("data", data);
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
                width="182"
                height="24"
                viewBox="0 0 182 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_27)">
                  <path
                    d="M61.2861 17.6021H48.7463V14.387H57.8856V9.29464H48.7463V6.42807H60.859V1.33008H43.0132V22.7057H61.2861V17.6021Z"
                    fill="black"
                  />
                  <path
                    d="M116.307 18.9623C120.135 18.9623 122.428 18.0292 124.041 16.3262C125.525 14.7973 126.38 12.5041 126.38 10.1659C126.38 7.82763 125.531 5.53438 124.041 4.00554C122.383 2.26312 120.129 1.33008 116.307 1.33008H105.133V22.7113H110.866V18.9679H116.307V18.9623ZM119.668 7.61405C120.304 8.28853 120.647 9.18223 120.647 10.1659C120.647 11.1495 120.309 11.9926 119.668 12.6727C118.988 13.3921 118.01 13.8643 116.054 13.8643H110.866V6.42807H116.054C118.01 6.42807 118.983 6.89459 119.668 7.61967"
                    fill="black"
                  />
                  <path
                    d="M155.456 13.5382L181.323 12.2679C181.649 12.2511 181.649 11.7677 181.323 11.7565L155.456 10.4918C154.759 4.85983 150.234 0.52063 143.894 0.52063C136.992 0.52063 132.237 5.66359 132.237 12.0206C132.237 18.3777 136.998 23.5206 143.894 23.5206C150.234 23.5206 154.765 19.1814 155.456 13.5438M143.894 18.5519C141.921 18.5519 140.229 17.6638 139.1 16.2699C138.684 15.2694 139.426 14.5106 140.252 14.46H139.864L149.903 13.8698C149.166 16.5678 146.839 18.5519 143.894 18.5519ZM139.78 9.58686H140.252C139.426 9.53627 138.684 8.77747 139.1 7.77698C140.224 6.38304 141.921 5.49497 143.894 5.49497C146.845 5.49497 149.166 7.47909 149.903 10.177L139.78 9.59248V9.58686Z"
                    fill="black"
                  />
                  <path
                    d="M93.5774 1.33008L82.7406 15.1009L71.9038 1.33008H67.8682V22.7057L73.6013 22.7001V12.9762L81.4816 22.7001H83.9996L91.8743 12.9762V22.7001L97.613 22.7057V1.33008H93.5774Z"
                    fill="black"
                  />
                  <path
                    d="M35.24 1.33008H29.5068V22.7057H35.24V1.33008Z"
                    fill="black"
                  />
                  <path
                    d="M22.5257 1.33008H0.430664V6.42807H8.78868V22.7057H14.5274L14.6061 6.42245H22.5257V1.33008Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_27">
                    <rect
                      width="181.139"
                      height="23"
                      fill="white"
                      transform="translate(0.430664 0.515015)"
                    />
                  </clipPath>
                </defs>
              </svg>
              TOUCH TRIAL
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
            <NavBtn text="PREVIOUS" link="/speed" active={true} />
            <NavBtn text="NEXT" link="/precision" active={true} />
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
