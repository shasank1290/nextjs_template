
"use client"; // This makes it a Client Component

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>;
}
