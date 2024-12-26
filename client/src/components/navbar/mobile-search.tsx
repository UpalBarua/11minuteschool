"use client";

import { CircleXIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const famousSearches = [
  "ssc",
  "hsc 25",
  "hsc 26",
  "english",
  "admission",
] as const;

export function MobileSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-1 justify-end md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsSearchOpen(true)}
      >
        <Image
          className="size-6 dark:invert"
          src="/icons/icon-search.svg"
          alt="search icon"
          height={50}
          width={50}
        />
      </Button>
      <form
        className={cn(
          "fixed right-0 top-0 hidden h-full w-full bg-background",
          isSearchOpen && "block",
        )}
      >
        <div className="relative">
          <Input
            className="h-12 px-12 !text-base focus-visible:ring-0"
            type="text"
            placeholder="Search skills, course or scool programs..."
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            ref={searchInputRef}
          />
          <ArrowLeftIcon
            className="absolute left-0 top-1/2 ms-4 size-4 -translate-y-1/2 text-muted-foreground"
            onClick={() => setIsSearchOpen(false)}
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
        <div className="w-full bg-background py-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
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
