interface TableRowProps {
  number: number;
  name: string;
  score: number;
}

export default function TableRow({ name, number, score }: TableRowProps) {
  return (
    <div className="flex items-center tracking-[-0.417px] gap-[24px] pb-[8px] pt-[10px] justify-between border-b-[1.5px] border-b-black">
      <div className="flex gap-[125px] max-lg:gap-[24px] items-center">
        <span className="w-[50px] max-sm:hidden">{number}</span>
        <span>{name}</span>
      </div>
      <span>{score}</span>
    </div>
  );
}
