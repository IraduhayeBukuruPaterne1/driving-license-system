// components/NationalIDForm.tsx
import { useState } from "react";
import users from "../data/mockUsers.json";

interface Props {
  onSuccess: (user: any) => void;
}

export default function NationalIDForm({ onSuccess }: Props) {
  const [nationalId, setNationalId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = users.find((u) => u.nationalId === nationalId);
    if (foundUser) {
      onSuccess(foundUser);
    } else {
      setError("User not found with that National ID");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Enter National ID</h2>

      <input
        type="text"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., 1199000888"
        required
      />
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}
