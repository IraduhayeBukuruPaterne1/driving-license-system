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
    <form onSubmit={handleSubmit}>
      <label className="block mb-2 font-medium">Enter National ID</label>
      <input
        type="text"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
        className="border p-2 w-full rounded mb-2"
        placeholder="e.g., 1199000888"
        required
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Continue
      </button>
    </form>
  );
}

