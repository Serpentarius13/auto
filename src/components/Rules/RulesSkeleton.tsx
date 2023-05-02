import Image from "next/image";
import { ReactNode } from "react";

export default function RulesSkeleton({
  children,
  title,
  isReverse = false,
}: {
  children: ReactNode;
  title: string;
  isReverse?: boolean;
}) {
  return (
    <section className={`flex w-full  ${isReverse && "flex-row-reverse"}`}>
      <div className="min-w-[50%] w-[72rem] max-w-screen   bg-white pt-[6.3rem] pb-[9rem] pl-[4.8rem]">
        <div className="flex flex-col items-start gap-[2.5rem] pb-[1.6rem]">
          <h2 className="text-[4rem] font-bold font-serif">{title}</h2>

          <div className="border-b-[5px] border-b-green border-solid w-[20.3rem]" />
        </div>
        {children}
      </div>

      <Image
        src="/img/rules-bg.png"
        alt="Фон с переплетением полиуретана"
        width={2000}
        height={2000}
        className="flex-1 h-full w-full"
      />
    </section>
  );
}
