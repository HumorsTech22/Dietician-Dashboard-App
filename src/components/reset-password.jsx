"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; // ✅ for routing
import { sendOtpService } from "@/services/authService";
import { toast } from "sonner";

export default function ResetPassword() {
  const [step, setStep] = useState("reset"); // reset | otp
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [serverOtp, setServerOtp] = useState(""); // ✅ store backend OTP

  const inputRefs = useRef([]);
  const router = useRouter();

  // 👉 Send OTP
  const handleResetSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await sendOtpService(email);

      if (response.success) {
        toast.success(response.message || "OTP sent successfully.");
        setServerOtp(String(response.otp)); // ✅ store OTP as string
        setStep("otp");
      } else {
        toast.error(response.message || "Failed to send OTP.");
      }
    } catch (error) {
      if (error.isApiError) {
        if (error.status === 404) {
          toast.error(error.data?.message || "Service not found (404).");
        } else {
          toast.error(error.data?.message || "Something went wrong.");
        }
        return;
      }
      console.error("Unexpected error:", error);
      toast.error("Unexpected error occurred. Please try again.");
    }
  };

  // 👉 Verify OTP
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp === serverOtp) {
      toast.success("OTP verified successfully!");
      router.push("/forgotPassword"); // ✅ navigate
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full mt-4 cursor-pointer bg-[#308BF9] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
                    className="w-12 h-12 border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength="1"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-[#308BF9] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Verify OTP
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              Didn’t receive OTP?{" "}
              <button
                type="button"
                className="cursor-pointer text-blue-600 hover:underline"
                onClick={handleResetSubmit} // ✅ resend OTP
              >
                Resend
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
