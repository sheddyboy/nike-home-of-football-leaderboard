import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import TableRow from "@/components/TableRow";
import { LeaderBoardResponse } from "@/types";
import Image from "next/image";

export default async function Precision() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT!}/items/game?filter[Gamemode][_eq]=Precision&limit=10&sort[]=-FinalScore`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  const { data } = (await res.json()) as LeaderBoardResponse;
  return (
    <main className="px-[55px] max-lg:px-[20px] pt-[50px] max-lg:pt-[20px] min-h-[100vh] flex flex-col">
      <div className="grid grid-cols-[1fr,1.2fr] max-lg:grid-cols-1 max-lg:gap-[40px] gap-[140px] flex-grow">
        <div className="flex flex-col max-lg:items-center max-lg:gap-[24px]">
          <Image src="/logo_2.png" alt="logo" width={580} height={400} />
          <div className="mt-auto mb-[50px] max-lg:mt-0 max-lg:mb-0 w-full">
            <Option>
              <svg
                width="200"
                height="24"
                viewBox="0 0 200 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_77)">
                  <path
                    d="M86.3561 16.6875L71.0208 1.06921V1.08101L71.0149 1.06921L70.9736 22.8311H75.655L75.6786 12.301L86.0672 22.8488L90.9667 22.8606L91.008 1.09869L86.3856 1.0928L86.3561 16.6875Z"
                    fill="black"
                  />
                  <path
                    d="M154.631 1.17542L154.619 7.66093L169.671 22.9491L176.098 22.955L154.631 1.17542Z"
                    fill="black"
                  />
                  <path
                    d="M141.861 1.16951L141.855 1.15771L141.813 22.9137L146.495 22.9196L146.513 12.3894L156.901 22.9314L163.322 22.9373L141.861 1.15771V1.16951Z"
                    fill="black"
                  />
                  <path
                    d="M67.3123 1.06335L45.7627 22.7957L52.1834 22.8075L62.6074 12.2833L62.5956 22.8193H67.2769L67.3182 1.06335L67.3123 1.08104V1.06335Z"
                    fill="black"
                  />
                  <path
                    d="M39.9619 9.51803L29.0662 9.50624L29.078 1.02201L24.2551 1.01611L24.2139 22.7721L29.0367 22.778L29.0603 14.2937L39.956 14.3055L39.9442 22.7898L44.7671 22.7957L44.8083 1.0397L39.9796 1.0338L39.9619 9.51803Z"
                    fill="black"
                  />
                  <path
                    d="M5.02223 10.7209L5.03402 5.80956H12.0148L12.7164 5.87442L13.2588 6.01592L13.8072 6.26355L14.1845 6.53476L14.5147 6.88262L14.7682 7.28944L14.9215 7.70215L14.9922 8.15024V8.30354L14.9333 8.83417L14.7918 9.25868L14.5265 9.69497L14.2199 10.0075L13.8131 10.2964L13.3178 10.5204L12.8049 10.656L12.2094 10.7209H11.9971H5.01634H5.02223ZM0.175781 22.7427H5.00454L5.01634 15.5437H11.9323L12.7931 15.5143L13.8013 15.3845L14.668 15.1841L15.4109 14.9306L16.2481 14.5414L16.9261 14.111L17.6454 13.5214L18.1878 12.9495L18.7185 12.2184L19.1783 11.3576L19.5203 10.4202L19.7267 9.52399L19.821 8.58065L19.8328 8.26227L19.7856 7.41915L19.6677 6.65268L19.4083 5.73881L19.0781 4.95465L18.7008 4.29431L18.1466 3.55142L17.5806 2.97362L16.8259 2.37224L16.1184 1.95952L15.2694 1.57629L14.3083 1.28149L13.3591 1.10461L12.2978 1.01617H11.9323L0.217053 0.986694L0.175781 22.7427Z"
                    fill="black"
                  />
                  <path
                    d="M94.3399 1.10465L94.3281 5.91572H94.3399L94.3517 5.92752V5.91572L101.621 5.92752L101.586 22.8665L106.415 22.8724L106.444 5.93341L113.761 5.93931L113.773 1.12234L94.3635 1.09875L94.3399 1.10465Z"
                    fill="black"
                  />
                  <path
                    d="M125.83 18.6509L125.069 18.5271L124.191 18.2794L123.448 17.967L122.829 17.6132L122.151 17.112L121.626 16.6109L121.102 15.9505L120.736 15.3551L120.412 14.6417L120.164 13.8634L120.017 13.1087L119.946 12.2892V12.0062L119.987 11.1631L120.117 10.4143L120.376 9.54168L120.706 8.81058L121.066 8.2033L121.591 7.53117L122.11 7.01233L122.776 6.48759L123.595 6.01591L124.274 5.7388L125.005 5.52655L125.948 5.36736L126.72 5.33199L127.575 5.37915L128.336 5.49707L129.22 5.7447L129.963 6.05718L130.582 6.41094L131.26 6.91209L131.785 7.41325L132.31 8.07359L132.675 8.66908L132.999 9.38249L133.247 10.1607L133.395 10.9154L133.465 11.735V12.018L133.424 12.8611L133.294 13.604L133.035 14.4766L132.711 15.2136L132.345 15.8208L131.826 16.4871L131.307 17.0059L130.641 17.5248L129.822 17.9905L129.144 18.2735L128.412 18.4858L127.469 18.645L126.703 18.6804L125.842 18.6332L125.83 18.6509ZM126.726 0.515015L125.647 0.562182L124.651 0.680101L123.442 0.933625L122.375 1.26969L121.432 1.66472L120.341 2.25431L119.427 2.88518L118.666 3.52194L117.835 4.38274L117.193 5.20228L116.55 6.22817L116.102 7.14204L115.701 8.19741L115.394 9.34122L115.211 10.432L115.123 11.6053V12.0062L115.158 13.1441L115.288 14.1818L115.553 15.4199L115.901 16.5048L116.314 17.4481L116.768 18.2735L117.405 19.2169L118.065 19.9952L118.72 20.6378L119.574 21.3276L120.37 21.8583L121.361 22.3889L122.517 22.8547L123.448 23.1318L124.427 23.3381L125.671 23.4914L126.673 23.5268L127.752 23.4855L128.743 23.3676L129.951 23.1141L131.018 22.778L131.962 22.383L133.053 21.7934L133.966 21.1625L134.727 20.5199L135.558 19.665L136.201 18.8454L136.844 17.8196L137.292 16.9057L137.693 15.8503L137.993 14.7124L138.176 13.6158L138.265 12.4425V12.0415L138.223 10.9036L138.094 9.86595L137.899 8.9285L137.557 7.80827L137.15 6.82955L136.702 5.98054L136.054 5.00181L135.387 4.19407L134.727 3.53373L133.86 2.81443L133.047 2.26021L132.05 1.71778L130.883 1.22842L129.945 0.939521L128.955 0.727268L127.711 0.568078L126.714 0.526806L126.726 0.515015Z"
                    fill="black"
                  />
                  <path
                    d="M186.275 10.2846L185.762 9.55939C185.685 9.45326 185.567 9.3943 185.438 9.3884C182.389 9.37661 179.347 9.36482 176.305 9.35892C175.556 9.35892 174.896 9.11719 174.294 8.70448C173.286 8.00876 172.968 6.90032 173.528 5.96877C173.882 5.38507 174.383 4.92519 175.061 4.766C175.639 4.6245 176.24 4.51247 176.835 4.51247C181.422 4.50658 186.004 4.53016 190.591 4.54785C190.879 4.54785 191.062 4.46531 191.233 4.23537C191.587 3.7519 191.976 3.29202 192.342 2.81445C192.684 2.37225 193.008 1.93006 193.373 1.4407C193.197 1.42891 193.073 1.41711 192.955 1.41711C192.135 1.41711 191.316 1.41122 190.496 1.40532C185.986 1.39353 181.481 1.38174 176.971 1.35815C176.918 1.35815 176.865 1.35815 176.812 1.35815C175.621 1.36995 174.477 1.61168 173.374 2.04798C172.431 2.41942 171.588 2.97364 170.886 3.73421C170.061 4.63629 169.524 5.66808 169.53 6.90032C169.536 8.60425 170.415 9.88366 171.73 10.8742C172.997 11.8352 174.459 12.3364 176.034 12.4366C177.39 12.5191 178.746 12.4897 180.102 12.5132C180.237 12.5132 180.367 12.5309 180.573 12.5368C179.948 13.3505 178.822 14.8775 178.203 15.6853C179.648 15.6853 180.986 15.697 182.33 15.6853C182.437 15.6853 182.566 15.5909 182.631 15.5025C183.315 14.624 184.535 12.9672 185.213 12.0887C185.555 11.6465 185.897 11.2043 186.251 10.7504C186.357 10.6089 186.363 10.4202 186.263 10.2728"
                    fill="black"
                  />
                  <path
                    d="M193.58 9.96034L199.824 1.43483H197.053C196.858 1.42304 196.67 1.51737 196.552 1.67067L192.371 6.9711C192.088 7.34844 191.652 7.5489 191.174 7.50763C190.774 7.47226 190.414 7.24232 190.178 6.91804L189.818 6.42868C189.695 6.2577 189.494 6.15747 189.288 6.15747L186.187 6.14567L188.975 9.93675C189.323 10.4143 189.323 11.0629 188.975 11.5345L185.868 15.703L189.017 15.7148C189.193 15.7148 189.359 15.6322 189.465 15.4907L190.196 14.512C190.473 14.1347 190.915 13.9342 191.393 13.9755C191.794 14.0108 192.147 14.2408 192.389 14.5592L193.073 15.4907C193.185 15.644 193.362 15.7324 193.551 15.7324L196.563 15.7442L193.586 11.5463C193.232 11.0688 193.232 10.4261 193.586 9.95444"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_77">
                    <rect
                      width="199.648"
                      height="23"
                      fill="white"
                      transform="translate(0.175781 0.515015)"
                    />
                  </clipPath>
                </defs>
              </svg>
              PRECISION TRIAL
            </Option>
          </div>
        </div>
        <div className="flex flex-col max-lg:gap-[25px]">
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
          <div className="flex justify-between gap-[16px] mt-auto max-sm:mt-[0px]">
            <NavBtn text="PREVIOUS" link="/touch" active={true} />
            <NavBtn text="NEXT" link="/speed" active={true} />
          </div>
        </div>
      </div>
      <footer className="flex py-[34px] max-lg:mt-[25px] mt-auto justify-between items-center font-futura text-[25.83px] max-sm:text-[12px] tracking-[-1.291px] max-sm:tracking-[-0.6px]">
        <span>HOME OF FOOTBALL</span>
        <span>MAD BRILLIANCE TRIAL</span>
      </footer>
    </main>
  );
}
