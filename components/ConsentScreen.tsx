import { useState } from 'react';
import { useRouter } from 'next/router';

const ConsentScreen = () => {
  const [consents, setConsents] = useState({
    nationalId: false,
    fingerprint: false,
  });

  const router = useRouter();

  const handleToggle = (field: keyof typeof consents) => {
    setConsents((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleAllow = () => {
    // Only navigate if both consents are true
    if (consents.nationalId && consents.fingerprint) {
      router.push('/userProfile'); // replace with your next page
    }
  };

  const isAllowed = consents.nationalId && consents.fingerprint;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Consent Required</h2>
        <p className="text-center text-gray-600">Please allow access to continue:</p>

        {/* National ID toggle */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-700">Access National ID Information</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consents.nationalId}
              onChange={() => handleToggle('nationalId')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-all"></div>
          </label>
        </div>

        {/* Fingerprint toggle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Verify Fingerprint</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consents.fingerprint}
              onChange={() => handleToggle('fingerprint')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-all"></div>
          </label>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
          <button
            onClick={handleAllow}
            disabled={!isAllowed}
            className={`px-4 py-2 rounded-lg text-white transition-all ${
              isAllowed
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-300 cursor-not-allowed'
            }`}
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentScreen;

