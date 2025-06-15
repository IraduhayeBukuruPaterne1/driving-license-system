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
    // Simulate OTP verification
    if (otp === "123456") {
      onVerified();
    } else {
      setError("Invalid OTP code");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">OTP Verification</h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        We sent a 6-digit OTP to <span className="font-semibold">{userData.phone}</span>
      </p>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter OTP"
        required
      />
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition-colors"
      >
        Verify OTP
      </button>
    </form>
  );
}
