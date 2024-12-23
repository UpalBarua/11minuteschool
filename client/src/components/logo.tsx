import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="inline-grid grid-cols-[auto,_1fr] grid-rows-2 items-center text-sm font-bold uppercase tracking-tight"
      href="/"
    >
      <span className="row-span-2 text-5xl font-extrabold">11</span>
      <span>MINUTE</span>
      <span>SCHOOL</span>
    </Link>
  );
}
