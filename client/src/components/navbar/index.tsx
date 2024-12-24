import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitch } from "./language-switch";
import { Navmenu } from "./navmenu";
import { Search } from "./search";

export function Navbar() {
  return (
    <header className="grid-container border-b">
      <div className="flex h-16 items-center gap-x-4 md:gap-x-6">
        <Navmenu />
        {/* MobileNavmenu */}
        <Logo />
        <Search />
        <LanguageSwitch />
        <a
          className="flex items-center gap-x-0.5 font-medium text-accent"
          href="tel:16910"
        >
          <Image
            className="size-5 md:size-4"
            src="/icons/icon-phone.svg"
            alt="phone icon"
            height={25}
            width={25}
          />
          <span className="hidden md:block">16910</span>
        </a>
        <Link className={buttonVariants()} href="/login">
          Login
        </Link>
      </div>
    </header>
  );
}
