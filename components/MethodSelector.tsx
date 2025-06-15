// components/MethodSelector.tsx
import React from "react";

interface Props {
  onSelect: (method: string) => void;
}

export default function MethodSelector({ onSelect }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-gray-800">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
        Choose Login Method
      </h2>

      <div className="space-y-4">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => onSelect("otp")}
        >
          Login with OTP
        </button>
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          onClick={() => onSelect("biometric")}
        >
          Login with Biometric
        </button>
        <button
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          onClick={() => onSelect("pin")}
        >
          Login with PIN
        </button>
      </div>
    </div>
  );
}

