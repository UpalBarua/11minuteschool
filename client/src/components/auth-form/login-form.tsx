"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const loginFormSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type TLoginFormSchema = z.infer<typeof loginFormSchema>;

type LoginFormProps = {
  email: string;
};

export function LoginForm({ email }: LoginFormProps) {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();

  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit({ password }: TLoginFormSchema) {
    startTransition(async () => {
      try {
        const response = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (response?.error === "CredentialsSignin") {
          toast.error("Wrong credentials");
        }

        router.push("/");
        router.refresh();
      } catch {
        toast.error("Something went wrong");
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
                  type="password"
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
