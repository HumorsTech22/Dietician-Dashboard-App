
"use client"
import Link from "next/link";
import React, { useState } from "react";
import { loginService } from "@/services/authService";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginService(email, password);
     
      sessionStorage.setItem("access_token", res.access_token);
    sessionStorage.setItem("dietician", JSON.stringify(res.dietician));

    
      toast.success(`Welcome ${res.dietician.name}`, {
        description: "You have logged in successfully",
      });
      router.push("/dashboard");

    } catch (error) {
    

      const errorMessage = error.data?.error || "An unexpected error occurred.";

      toast.error(errorMessage);
      
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
    href="/resetPassword"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                {loading ? "Logging in..." : "Login"}
                </Button>
                <Button variant="outline" className="w-full cursor-pointer">
                  Login with Google
                </Button>
              </div>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
