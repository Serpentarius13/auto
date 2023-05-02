import { ReactNode } from "react";

export default function BackgroundSkeleton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="w-full min-h-[31.1rem] flex items-center justify-center relative backgrounded-bg">
      {children}
    </section>
  );
}
