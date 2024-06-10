import NavBtn from "@/components/NavBtn";
import TableRow from "@/components/TableRow";
import { LeaderBoardResponse } from "@/types";

export default async function Speed() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT!}/items/game?filter[Gamemode][_eq]=Speed&limit=10&sort[]=-FinalScore`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  const { data } = (await res.json()) as LeaderBoardResponse;
  return (
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
  );
}
