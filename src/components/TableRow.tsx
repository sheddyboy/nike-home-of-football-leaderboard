interface TableRowProps {
  number: number;
  name: string;
  score: number;
}

export default function TableRow({ name, number, score }: TableRowProps) {
  return (
    <div className="flex items-center justify-between gap-[24px] border-b-[1.5px] border-b-black pb-[8px] pt-[10px] tracking-[-0.417px]">
      <div className="flex items-center gap-[125px] max-lg:gap-[24px]">
        <span className="w-[50px] max-sm:hidden">{number}</span>
        <span>{name}</span>
      </div>
      <span>{score}</span>
    </div>
  );
}
