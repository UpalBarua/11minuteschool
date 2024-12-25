"use client";

import { buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className={buttonVariants({
        variant: "destructive",
      })}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
