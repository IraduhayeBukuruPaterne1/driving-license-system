interface Props {
  userData: any;
}

export default function UserProfile({ userData }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Identity Verified ✅
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Below is your verified profile. You can now proceed to the license application.
      </p>

      <div className="bg-gray-100 p-4 rounded space-y-2">
        <p><strong>National ID:</strong> {userData.nationalId}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Proceed to License Application
        </button>
      </div>
    </div>
  );
}
