interface Props {
  userData: any;
  onConsent: () => void;
}

export default function ConsentScreen({ userData, onConsent }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Consent Required</h2>
        <p className="text-sm text-gray-600 mt-2">
          By continuing, you agree to share the following data with the Driver's License System:
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-gray-700"><strong>National ID:</strong> {userData.nationalId}</p>
        <p className="text-gray-700"><strong>Name:</strong> {userData.name}</p>
        <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
        <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
        <p className="text-gray-700"><strong>Date of Birth:</strong> {userData.dob}</p>
        <p className="text-gray-700"><strong>Gender:</strong> {userData.gender}</p>
      </div>

      <button
        onClick={onConsent}
        className="bg-green-600 text-white px-6 py-2 rounded w-full hover:bg-green-700 transition-colors"
      >
        I Consent and Continue
      </button>
    </div>
  );
}
