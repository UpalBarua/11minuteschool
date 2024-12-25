"use client"

import { useState } from "react"
import { EmailForm } from "./email-form"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"

export function AuthForm() {
  const [verifiedEmail, setVerifiedEmail] = useState("")
  const [isEmailRegistered, setIsEmailRegistered] = useState<null | boolean>(
    null,
  )

  return (
    <>
      {isEmailRegistered === null && (
        <EmailForm
          setIsEmailRegisteredAction={setIsEmailRegistered}
          setVerifiedEmailAction={setVerifiedEmail}
        />
      )}
      {isEmailRegistered !== null && isEmailRegistered && (
        <LoginForm email={verifiedEmail} />
      )}
      {isEmailRegistered !== null && !isEmailRegistered && (
        <RegisterForm email={verifiedEmail} />
      )}
    </>
  )
}
