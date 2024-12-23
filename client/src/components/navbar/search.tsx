"use client";

import { CircleXIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const famousSearches = [
  "ssc",
  "hsc 25",
  "hsc 26",
  "english",
  "admission",
] as const;

export function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <form className="relative w-[40rem]">
        <div className="relative">
          <Input
            className={cn(
              "h-11 px-10 !text-base focus-visible:ring-0",
              isSearchOpen ? "rounded-b-none rounded-t-3xl" : "rounded-full",
            )}
            type="text"
            placeholder="Search skills, course or scool programs..."
            onClick={() => setIsSearchOpen((prev) => !prev)}
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            ref={searchInputRef}
          />
          <SearchIcon className="absolute left-0 top-1/2 ms-3 size-5 -translate-y-1/2 text-muted-foreground" />
          {!!searchText && (
            <CircleXIcon
              className="absolute right-0 top-1/2 me-3 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
              onClick={() => {
                setSearchText("");
                searchInputRef.current?.focus();
              }}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute w-full rounded-b-3xl border border-t-0 border-input bg-background py-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            isSearchOpen ? "block" : "hidden",
          )}
        >
          {!searchText ? (
            <Fragment>
              <h2 className="font-mediub px-5 pb-2">Famous Searches</h2>
              {famousSearches.map((search) => (
                <Link
                  className="flex items-center gap-x-2.5 px-6 py-2 text-muted-foreground transition-colors hover:bg-muted focus-visible:bg-muted"
                  key={search}
                  href={`/search/?q=${search}`}
                >
                  <SearchIcon className="size-4" />
                  <span>{search}</span>
                </Link>
              ))}
            </Fragment>
          ) : (
            <Link
              className="flex items-center gap-x-2.5 px-6 py-2 text-muted-foreground transition-colors hover:bg-muted focus-visible:bg-muted"
              href={`/search/?q=${searchText}`}
            >
              <SearchIcon className="size-4" />
              <span>{searchText}</span>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}
