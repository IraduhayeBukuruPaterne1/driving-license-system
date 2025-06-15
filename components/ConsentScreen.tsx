import { useState } from "react";

interface Props {
  userData: any;
  onConsent: () => void;
}

export default function ConsentScreen({ userData, onConsent }: Props) {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    if (consentGiven) {
      onConsent();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Consent to Share Data</h2>
      <p className="mb-4">
        The system requests permission to access the following information:
      </p>
      <ul className="mb-4 list-disc list-inside">
        <li>Name: {userData.name}</li>
        <li>Email: {userData.email}</li>
        <li>Phone: {userData.phone}</li>
        <li>Gender: {userData.gender}</li>
        <li>Date of Birth: {userData.dob}</li>
      </ul>

      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={consentGiven}
          onChange={(e) => setConsentGiven(e.target.checked)}
        />
        I allow this information to be shared with the service provider.
      </label>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        onClick={handleConsent}
        disabled={!consentGiven}
      >
        Continue
      </button>
    </div>
  );
}

