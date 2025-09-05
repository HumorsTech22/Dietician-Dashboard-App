"use client";


import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";



export default function Home() {
  const router = useRouter();

  return (
 <>

<LoginForm/>
 </>
  );
}
