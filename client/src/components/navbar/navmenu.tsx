"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <Image
        className={cn("size-5", isMenuOpen && "scale-x-[-1]")}
        src="/icons/icon-menu.svg"
        alt="menu icon"
        height={25}
        width={25}
      />
    </Button>
  );
}
