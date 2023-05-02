export default function RulesList({
  list,
  title,
}: {
  list: string[];
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-[0.9rem]">
      {title && <h3 className="text-[3rem] font-serif">{title}</h3>}

      <ul className="flex flex-col gap-[0.9rem]">
        {list.map((item) => (
          <li key={item} className="  list-disc text-[2rem]">
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
