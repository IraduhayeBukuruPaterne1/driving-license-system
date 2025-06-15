// components/ConsentScreen.tsx
import React from "react";

interface ConsentScreenProps {
  userData: any;
  onConsent: () => void;
}

export default function ConsentScreen({ userData, onConsent }: ConsentScreenProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-gray-800">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
        Consent to Share Your Information
      </h2>

      <p className="text-sm mb-4 text-center">
        <strong>Health Service</strong> is requesting access to the following information:
      </p>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
        <h3 className="font-semibold text-sm mb-2">Essential Claims</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Email Address (Required)</li>
        </ul>

        <h3 className="font-semibold text-sm mb-2">Voluntary Claims</h3>
        <ul className="list-inside">
          <li>✔️ Birthdate</li>
          <li>✔️ Gender</li>
          <li>✔️ Name</li>
          <li>✔️ Phone Number</li>
          <li>✔️ Picture</li>
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <button
          className="w-full py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => alert("You cancelled consent.")}
        >
          Cancel
        </button>
        <button
          className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={onConsent}
        >
          Allow
        </button>
      </div>
    </div>
  );
}

