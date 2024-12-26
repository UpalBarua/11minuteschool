"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

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
      {navLinks.slice(0, 5).map(({ label, href, links }: TNavLink, i) =>
        !!links?.length ? (
          <div key={label + i}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium outline-0 hover:text-green-500">
                <span>{label}</span>
                <ChevronDownIcon className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-green-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[999] mt-4">
                {links.map(({ label, href, icon }, i) => (
                  <DropdownMenuItem key={label + i}>
                    <Link
                      href={href as string}
                      className="flex cursor-pointer items-center gap-x-2 rounded px-2 py-1 text-base font-medium outline-0 hover:bg-gray-100 hover:text-green-500"
                    >
                      {icon}
                      <span>{label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link
            href={href as string}
            className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-foreground hover:text-green-500"
            key={label}
          >
            {label}
          </Link>
        ),
      )}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium outline-0 hover:text-green-500">
          <span>আরো</span>
          <ChevronDownIcon className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-green-500" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[999] mt-4">
          {navLinks.slice(6).map(({ label, href }, i) => (
            <DropdownMenuItem key={label + i}>
              <Link
                href={href as string}
                className="flex cursor-pointer items-center gap-x-2 rounded px-2 py-1 text-base font-medium outline-0 hover:bg-gray-100 hover:text-green-500"
              >
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
