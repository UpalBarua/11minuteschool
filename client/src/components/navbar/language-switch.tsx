"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function LanguageSwitch() {
  const [currentLang, setCurrentLang] = useState<"EN" | "BN">("EN");

  function switchLang() {
    if (currentLang === "EN") {
      setCurrentLang("BN");
    } else {
      setCurrentLang("EN");
    }
  }

  return (
    <Button
      className="hidden !px-2.5 md:flex"
      variant="outline"
      onClick={switchLang}
    >
      <Image
        className="size-4"
        src="/icons/icon-language.svg"
        alt="language icon"
        height={25}
        width={25}
      />
      {currentLang}
    </Button>
  );
}
