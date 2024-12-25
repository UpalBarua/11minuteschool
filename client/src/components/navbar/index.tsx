import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitch } from "./language-switch";
import { MobileNavMenu } from "./mobile-nav-menu";
import { NavMenu } from "./nav-menu";
import { Search } from "./search";

export function Navbar() {
  return (
    <header className="grid-container fixed right-0 z-[99] w-full border-b bg-background">
      <div className="flex h-16 items-center gap-x-4 md:gap-x-6">
        <MobileNavMenu />
        <Logo />
        <Search />
        <NavMenu />
        <LanguageSwitch />
        <ThemeToggle />
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
