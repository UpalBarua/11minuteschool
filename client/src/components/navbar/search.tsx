"use client";

import { CircleXIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
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
    <div className="mx-2 hidden flex-1 md:block">
      <form className="relative">
        <div className="relative">
          <Input
            className={cn(
              "h-11 px-12 !text-base focus-visible:ring-0",
              isSearchOpen ? "rounded-b-none rounded-t-3xl" : "rounded-full",
            )}
            type="text"
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            onClick={() => setIsSearchOpen((prev) => !prev)}
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            ref={searchInputRef}
          />
          <Image
            className="absolute left-0 top-1/2 ms-4 size-7 -translate-y-1/2 text-muted-foreground dark:invert"
            src="/icons/icon-search.svg"
            alt="search icon"
            height={50}
            width={50}
          />
          {!!searchText && (
            <CircleXIcon
              className="absolute right-0 top-1/2 me-4 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
              onClick={() => {
                setSearchText("");
                searchInputRef.current?.focus();
              }}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute z-[99] w-full rounded-b-3xl border border-t-0 border-input bg-background py-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
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
      <div
        className={cn(
          "fixed inset-0 top-16 hidden bg-black/50",
          isSearchOpen && "block",
        )}
        onClick={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
