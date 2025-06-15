// components/UserProfile.tsx
interface Props {
  userData: any;
}

export default function UserProfile({ userData }: Props) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto text-center border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Identity Verified ✅</h2>

      <div className="text-left space-y-3 text-gray-800">
        <p><strong>Full Name:</strong> {userData.name}</p>
        <p><strong>National ID:</strong> {userData.nationalId}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Cancel
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Allow
        </button>
      </div>
    </div>
  );
}

