import { useState } from 'react';

const ConsentScreen = () => {
  const [consents, setConsents] = useState({
    id: false,
    phone: false,
    fingerprint: false,
  });

  const handleToggle = (field: keyof typeof consents) => {
    setConsents((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Consent Required</h2>
        <p className="text-center text-gray-600">Please allow access to the following data to continue:</p>

        {/* Toggle 1 */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-700">Share National ID Details</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consents.id}
              onChange={() => handleToggle('id')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-all"></div>
          </label>
        </div>

        {/* Toggle 2 */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-700">Share Phone Number</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consents.phone}
              onChange={() => handleToggle('phone')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-all"></div>
          </label>
        </div>

        {/* Toggle 3 */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Share Fingerprint Data</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consents.fingerprint}
              onChange={() => handleToggle('fingerprint')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-all"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Allow</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentScreen;

