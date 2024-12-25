import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitch } from "./language-switch";
import { MobileNavMenu } from "./mobile-nav-menu";
import { NavMenu } from "./nav-menu";
import { Search } from "./search";
import { MobileSearch } from "./mobile-search";
import { Phone } from "./phone";

export function Navbar() {
  return (
    <header className="grid-container fixed right-0 z-[99] w-full border-b bg-background">
      <div className="flex h-16 items-center gap-x-2">
        <MobileNavMenu />
        <Logo />
        <Search />
        <MobileSearch />
        <NavMenu />
        <LanguageSwitch />
        <ThemeToggle />
        <Phone />
        <Link className={buttonVariants()} href="/login">
          লগ-ইন
        </Link>
      </div>
    </header>
  );
}
