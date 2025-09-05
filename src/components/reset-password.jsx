"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { sendOtpService, resetPasswordService } from "@/services/authService";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPassword() {
  const [step, setStep] = useState("reset"); 
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [serverOtp, setServerOtp] = useState(""); 
  const [emailError, setEmailError] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0); // Timer state

  const inputRefs = useRef([]);
  const router = useRouter();

  // Timer effect
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Validate passwords match
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setEmailError(""); 

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await sendOtpService(email);

      if (response.success) {
        toast.success(response.message || "OTP sent successfully.");
        setServerOtp(String(response.otp));
        setStep("otp");
        setResendTimer(60); // Start the 60-second timer
      } else {
        setEmailError(response.message || "Failed to send OTP."); 
      }
    } catch (error) {
      if (error.isApiError) {
        if (error.status === 404) {
          setEmailError(error.data?.message || "Email not found."); 
        } else {
          setEmailError(error.data?.message || "Something went wrong."); 
        }
        return;
      }
      console.error("Unexpected error:", error);
      setEmailError("Unexpected error occurred. Please try again."); 
    }
  };

  // Handle OTP resend
  const handleResendOtp = async () => {
    if (resendTimer > 0) return; // Prevent resend if timer is active
    
    try {
      const response = await sendOtpService(email);
      
      if (response.success) {
        toast.success("OTP resent successfully!");
        setResendTimer(60); // Reset the timer
        setServerOtp(String(response.otp));
      } else {
        toast.error(response.message || "Failed to resend OTP.");
      }
    } catch (error) {
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  // 👉 Verify OTP
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp === serverOtp) {
      toast.success("OTP verified successfully!");
      setStep("forgot");
    } else {
      toast.error("Invalid OTP. Please enter the correct code.");
    }
  };

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();

    if (/^[0-9]+$/.test(pasteData)) {
      const digits = pasteData.split("").slice(0, otp.length);
      const newOtp = [...otp];

      digits.forEach((digit, i) => {
        newOtp[i] = digit;
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = digit;
        }
      });

      setOtp(newOtp);
      const lastIndex = digits.length - 1;
      if (lastIndex < otp.length) {
        inputRefs.current[lastIndex].focus();
      }
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await resetPasswordService(email, password);
      toast.success(res.message || "Password updated successfully.");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
        toast.error(error.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {step === "reset" && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Reset Password
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Enter your email to receive an OTP.
            </p>

            <form onSubmit={handleResetSubmit} className="mt-6">
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />

              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}

              <button
                type="submit"
                className="w-full mt-4 cursor-pointer bg-[#308BF9] text-white py-2 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition"
              >
                Send OTP
              </button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Enter OTP
            </h2>
            <p className="text-gray-500 text-center mt-2">
              We sent a 4-digit OTP to your email.
            </p>

            <form onSubmit={handleOtpSubmit} className="mt-6 space-y-6">
              <div className="flex justify-center gap-4" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 border border-black rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength="1"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full mt-4 cursor-pointer bg-[#308BF9] text-white py-2 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition"
              >
                Verify OTP
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
            {resendTimer > 0 ? (
    <>
      Resend OTP in{" "}
      <span className="text-red-500 font-semibold">{resendTimer}</span> seconds
    </>
  )  : (
                <>
                  Didn't receive OTP?{" "}
                  <button
                    type="button"
                    className="cursor-pointer text-[#308BF9] hover:underline"
                    onClick={handleResendOtp}
                  >
                    Resend
                  </button>
                </>
              )}
            </p>
          </>
        )}

        {step === "forgot" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Reset your password
            </h2>
            <p className="text-gray-500 text-center">
              Enter your new password for {email}
            </p>

            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <Label htmlFor="password" className="block text-sm font-medium mb-2">
                  New Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full"
                />
                {passwordError && (
                  <p className="mt-1 text-sm text-red-600">{passwordError}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-[#308BF9] transition" 
                disabled={loading || password !== confirmPassword || !password || !confirmPassword}
              >
                {loading ? "Resetting..." : "Reset password"}
              </Button>
            </form>

            <div className="flex justify-center">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                prefetch={false}
              >
                Back to login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}