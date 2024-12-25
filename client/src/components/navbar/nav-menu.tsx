"use client";

import { ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks, type TNavLink } from "./mobile-nav-menu";

export function NavMenu() {
  return (
    <nav className="mx-2 hidden items-center gap-2 lg:gap-4 xl:flex">
      {navLinks.slice(0, 5).map(({ label, links }: TNavLink) =>
        !!links?.length ? (
          <div key={label}>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-green flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563]">
                <span>{label}</span>
                <ChevronDownIcon className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-green-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[999]">
                {links.map(({ label, href, icon }) => (
                  <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-x-2 rounded px-4 py-3 text-base font-medium text-[#4B5563] outline-0 hover:bg-gray-100"
                    key={label}
                  >
                    {icon}
                    <span>{label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div
            className="hover:text-green flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563]"
            key={label}
          >
            {label}
          </div>
        ),
      )}
    </nav>
  );
}
