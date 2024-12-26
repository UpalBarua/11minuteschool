import { AuthForm } from "@/components/auth-form"

export default function AuthPage() {
  return (
    <main className="grid-container pt-16">
      <div className="mx-auto w-full max-w-sm py-20">
        <h2 className="mb-4 text-2xl font-semibold leading-[32px] text-[#111827]">
          Continue With Email
        </h2>
        <AuthForm />
      </div>
    </main>
  )
}
