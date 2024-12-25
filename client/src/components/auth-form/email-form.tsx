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

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address." }),
})

type TEmailFormSchema = z.infer<typeof emailFormSchema>

type EmailFormProps = {
  setIsEmailRegisteredAction: React.Dispatch<
    React.SetStateAction<boolean | null>
  >
  setVerifiedEmailAction: React.Dispatch<React.SetStateAction<string>>
}

export function EmailForm({
  setIsEmailRegisteredAction,
  setVerifiedEmailAction,
}: EmailFormProps) {
  const [isLoading, startTransition] = useTransition()

  const form = useForm<TEmailFormSchema>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit({ email }: TEmailFormSchema) {
    startTransition(async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/users/${email}`,
        ).then((res) => res.json())
        setIsEmailRegisteredAction(res.success)
        setVerifiedEmailAction(email)
        console.log(res)
      } catch (error) {
        setIsEmailRegisteredAction(false)
        console.log(error)
      }
    })
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
          Continue
        </Button>
      </form>
    </Form>
  )
}
