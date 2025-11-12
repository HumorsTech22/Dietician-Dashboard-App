// "use client"
// import Link from "next/link";
// import React, { useState } from "react";
// import { loginService } from "@/services/authService";
// import { cookieManager } from "@/lib/cookies";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// export function LoginForm({
//   className,
//   ...props
// }) {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await loginService(email, password);
     
//       // Store token and dietician data in cookies
//       cookieManager.set("access_token", res.access_token);
//       cookieManager.set("dietician", JSON.stringify(res.dietician));

//       toast.success(`Welcome ${res.dietician.name}`, {
//         description: "You have logged in successfully",
//       });
//       router.push("/dashboard");

//     } catch (error) {
//       let errorMessage = "An unexpected error occurred.";
      
//       if (error.isApiError) {
//         errorMessage = error.message || error.data?.error || "Invalid credentials";
//       } else if (error.message) {
//         errorMessage = error.message;
//       }
      
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
//         <h2 className="text-2xl font-bold text-gray-800 text-center">
//           Login to your account
//         </h2>
//         <p className="text-gray-500 text-center mt-2">
//           Enter your email and password to continue.
//         </p>

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-2">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               value={email}
//               autoComplete="false"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label htmlFor="password" className="block text-sm font-medium">
//                 Password
//               </label>
//               <Link
//                 href="/resetPassword"
//                 className="text-sm text-[#308BF9] hover:underline"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               autoComplete="false"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full mt-2 cursor-pointer bg-[#308BF9] text-white py-2 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



















"use client"
import Link from "next/link";
import React, { useState } from "react";
import { loginService, updateDietPlanStatusService } from "@/services/authService";
import { cookieManager } from "@/lib/cookies";
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
     
      // Store token and dietician data in cookies
      cookieManager.set("access_token", res.access_token);
      cookieManager.set("dietician", JSON.stringify(res.dietician));

      // Hit the DIETPLANSTATUS API after successful login
      try {
        await updateDietPlanStatusService(res.dietician.dietician_id);
        // No need to handle response, just need to hit the API
      } catch (dietPlanError) {
        // Don't show error for diet plan status API failure
        // Just log it silently and continue with login flow
        console.error("Diet plan status update failed:", dietPlanError);
      }

      toast.success(`Welcome ${res.dietician.name}`, {
        description: "You have logged in successfully",
      });
      router.push("/dashboard");

    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
      
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
              autoComplete="false"
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
              autoComplete="false"
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