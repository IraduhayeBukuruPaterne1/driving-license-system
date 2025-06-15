import React from "react";

interface Props {
  onSelect: (method: string) => void;
}

export default function MethodSelector({ onSelect }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Choose Login Method</h2>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => onSelect("otp")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Login with OTP
        </button>
        <button
          onClick={() => onSelect("biometric")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Login with Biometric
        </button>
        <button
          onClick={() => onSelect("pin")}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Login with PIN
        </button>
      </div>
    </div>
  );
}
