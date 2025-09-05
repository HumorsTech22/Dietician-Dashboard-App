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
      // Handle the error properly
      let errorMessage = "An unexpected error occurred.";
      
      // Check if it's an API error with the expected structure
      if (error.isApiError) {
        errorMessage = error.message || error.data?.error || "Invalid credentials";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // return (
  //     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
  //     <div className="w-full max-w-sm">
  //   <div className={cn("flex flex-col gap-6", className)} {...props}>
  //     <Card>
  //       <CardHeader>
  //         <CardTitle>Login to your account</CardTitle>
  //         <CardDescription className="whitespace-nowrap">
  //           Enter your email below to login to your account
  //         </CardDescription>
  //       </CardHeader>
  //       <CardContent>
  //         <form onSubmit={handleSubmit}>
  //           <div className="flex flex-col gap-6">
  //             <div className="grid gap-3">
  //               <Label htmlFor="email">Email</Label>
  //               <Input 
  //                 id="email" 
  //                 type="email" 
  //                 placeholder="m@example.com" 
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 required 
  //               />
  //             </div>
  //             <div className="grid gap-3">
  //               <div className="flex items-center">
  //                 <Label htmlFor="password">Password</Label>
                 
  //               </div>
  //               <Input 
  //                 id="password" 
  //                 type="password"
  //                 value={password}
  //                 onChange={(e) => setPassword(e.target.value)}
  //                 required 
  //               />

                
  //             </div>

  //             <div className="flex justify-end">
  //                <Link
  //                   href="/resetPassword"
  //                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
  //                 >
  //                   Forgot your password?
  //                 </Link>
  //             </div>

  //             <div className="flex flex-col gap-3">
  //               <Button type="submit" 
  //               className="w-full cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition" 
  //               disabled={loading}>
  //                 {loading ? "Logging in..." : "Login"}
  //               </Button>
               
  //             </div>
  //           </div>
  //         </form>
  //       </CardContent>
  //     </Card>
  //   </div>
  //   </div>
  //   </div>
  // );






return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Login to your account
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Enter your email and password to continue.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Link
              href="/resetPassword"
              className="text-sm text-[#308BF9] hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 cursor-pointer bg-[#308BF9] text-white py-2 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  </div>
);







}
















