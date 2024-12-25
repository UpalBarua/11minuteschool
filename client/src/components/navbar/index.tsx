import { auth } from "@/auth";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { LanguageSwitch } from "./language-switch";
import { MobileNavMenu } from "./mobile-nav-menu";
import { MobileSearch } from "./mobile-search";
import { NavMenu } from "./nav-menu";
import { Phone } from "./phone";
import { Search } from "./search";
import { LogoutButton } from "./logout-button";

export async function Navbar() {
  const session = await auth();

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
        {session?.user ? (
          <LogoutButton />
        ) : (
          <Link className={buttonVariants()} href="/auth">
            লগ-ইন
          </Link>
        )}
      </div>
    </header>
  );
}
