import NavBtn from "@/components/NavBtn";
import TableRow from "@/components/TableRow";
import { LeaderBoardResponse } from "@/types";

export default async function Speed() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT!}/items/game?filter[Gamemode][_eq]=Speed&limit=10&sort[]=-FinalScore`,
    { cache: "no-store" },
  );
  const { data } = (await res.json()) as LeaderBoardResponse;
  return (
    <div className="flex flex-col max-lg:flex-grow max-lg:gap-[25px]">
      <div className="flex flex-col gap-[27px] font-helvetica text-[20.825px] font-bold uppercase leading-none tracking-[0.208px] max-sm:gap-[8px] max-sm:tracking-[0.12px]">
        <div className="flex items-center justify-between gap-[24px] max-sm:text-[12px]">
          <div className="flex items-center gap-[125px] max-lg:gap-[24px]">
            <span className="w-[50px] max-sm:hidden">NR.</span>
            <span>NAME</span>
          </div>
          <span>SCORE</span>
        </div>
        <div className="border-t-[1.5px] border-t-black max-sm:max-h-[29dvh] max-sm:overflow-auto">
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
      <div className="mt-auto flex justify-between gap-[16px]">
        <NavBtn text="PREVIOUS" link="/precision" active={true} />
        <NavBtn text="NEXT" link="/touch" active={true} />
      </div>
    </div>
  );
}
