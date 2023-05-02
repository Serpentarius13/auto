import { ReactNode } from "react";

export default function SectionSkeleton({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-[150rem] mx-auto w-full flex flex-col items-center gap-[5rem]">
      <div className="flex flex-col items-center gap-[3rem]">
        <h2 className="text-[4rem] font-bold font-serif">{title}</h2>

        <div className="border-b-[5px] border-b-green border-solid w-[11rem]" />
      </div>

      {children}
    </section>
  );
}
