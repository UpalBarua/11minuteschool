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
import api from "@/data/api";
import { zodResolver } from "@hookform/resolvers/zod";

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address." }),
});

type TEmailFormSchema = z.infer<typeof emailFormSchema>;

type EmailFormProps = {
  setIsEmailRegisteredAction: React.Dispatch<
    React.SetStateAction<boolean | null>
  >;
  setVerifiedEmailAction: React.Dispatch<React.SetStateAction<string>>;
};

export function EmailForm({
  setIsEmailRegisteredAction,
  setVerifiedEmailAction,
}: Readonly<EmailFormProps>) {
  const [isLoading, startTransition] = useTransition();

  const form = useForm<TEmailFormSchema>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit({ email }: TEmailFormSchema) {
    startTransition(async () => {
      try {
        const response = await fetch(`${api}/api/users/${email}`).then((res) =>
          res.json(),
        );

        setVerifiedEmailAction(email);

        if (response.success) {
          setIsEmailRegisteredAction(true);
          return;
        }

        setIsEmailRegisteredAction(false);
      } catch {
        setIsEmailRegisteredAction(false);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Continue"}
        </Button>
      </form>
    </Form>
  );
}
