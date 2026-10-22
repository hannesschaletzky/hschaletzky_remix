import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center gap-2">
      <div className="mb-1">{title}</div>
      {children}
    </section>
  );
}
