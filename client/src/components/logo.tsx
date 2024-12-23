import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      // className="inline-grid grid-cols-[auto,_1fr] grid-rows-2 items-center text-sm font-bold uppercase tracking-tight"
      href="/"
    >
      <Image src="/icons/icon-logo.svg" alt="logo" height={25} width={100} />
    </Link>
  );
}
