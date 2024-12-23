import { Logo } from "@/components/logo";
import { Search } from "./search";

export function Navbar() {
  return (
    <header className="grid-container border-b">
      <div className="flex h-20 items-center gap-x-8">
        {/* Navmenu */}
        {/* MobileNavmenu */}
        <Logo />
        <Search />
        {/* Searchbar */}
        {/* Language Switch */}
        {/* Phone */}
        {/* Login */}
      </div>
    </header>
  );
}
