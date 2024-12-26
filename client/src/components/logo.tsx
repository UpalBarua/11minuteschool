import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        className="dark:invert"
        src="/icons/icon-logo.svg"
        alt="logo"
        height={25}
        width={100}
      />
    </Link>
  );
}
