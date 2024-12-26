"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import api from "@/data/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerFormSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    password2: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine(({ password, password2 }) => password === password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });

type TRegisterFormSchema = z.infer<typeof registerFormSchema>;

type RegisterFormProps = {
  email: string;
};

export function RegisterForm({ email }: RegisterFormProps) {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();

  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  function onSubmit({ password }: TRegisterFormSchema) {
    startTransition(async () => {
      try {
        await fetch(`${api}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => res.json());

        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        router.push("/");
        router.refresh();
      } catch {
        toast.error("Something went wrong!");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="******"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="******"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Register"}
        </Button>
      </form>
    </Form>
  );
}
