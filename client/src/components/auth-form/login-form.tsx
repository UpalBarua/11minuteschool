"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginFormSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
})

type TLoginFormSchema = z.infer<typeof loginFormSchema>

type LoginFormProps = {
  email: string
}

export function LoginForm({ email }: LoginFormProps) {
  const [isLoading, startTransition] = useTransition()

  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
    },
  })

  function onSubmit({ password }: TLoginFormSchema) {
    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => res.json())
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    })
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
                <Input className="h-12" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  )
}