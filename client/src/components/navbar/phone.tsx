import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function Phone() {
  return (
    <a
      className={buttonVariants({ variant: "outline", className: "!px-3" })}
      href="tel:16910"
    >
      <Image
        className="size-5 md:size-4"
        src="/icons/icon-phone.svg"
        alt="phone icon"
        height={25}
        width={25}
      />
      <span className="hidden md:block">16910</span>
    </a>
  );
}
