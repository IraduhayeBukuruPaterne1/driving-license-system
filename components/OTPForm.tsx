// components/OTPForm.tsx
import { useState } from "react";

interface Props {
  userData: any;
  onVerified: () => void;
}

export default function OTPForm({ userData, onVerified }: Props) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "123456") {
      onVerified();
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
        OTP Verification
      </h2>

      <p className="text-sm text-gray-600 mb-2 text-center">
        An OTP was sent to <strong>{userData.phone}</strong>
      </p>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter 6-digit OTP"
        required
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition"
      >
        Verify
      </button>
    </form>
  );
}

