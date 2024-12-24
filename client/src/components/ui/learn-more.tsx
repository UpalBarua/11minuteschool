import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type LearnMoreProps = {
  label: string;
  href: string;
};

export function LearnMore({ label, href }: Readonly<LearnMoreProps>) {
  return (
    <Link
      className="flex items-center gap-x-1 text-green-500 underline-offset-2 hover:underline"
      href={href}
    >
      {label}
      <ArrowRightIcon className="size-4" />
    </Link>
  );
}
