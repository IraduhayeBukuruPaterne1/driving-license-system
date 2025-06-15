import React from 'react';

const UserProfile = () => {
  const user = {
    fullName: 'Iraduhaye Bukuru Paterne',
    nationalId: '1204030045020123',
    phoneNumber: '+257 79 123 456',
    licenseStatus: 'Pending Verification',
    drivingSchool: 'École de Conduite Gitega',
    applicationDate: 'June 15, 2025',
    profilePic:
      'https://ui-avatars.com/api/?name=Iraduhaye+Bukuru+Paterne&background=0D8ABC&color=fff',
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            src={user.profilePic}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-blue-600"
          />
          <h2 className="text-xl font-bold mt-4">{user.fullName}</h2>
          <p className="text-sm text-gray-500">National ID: {user.nationalId}</p>
          <p className="text-sm text-gray-500">Phone: {user.phoneNumber}</p>
        </div>

        <div className="mt-6 border-t pt-4 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>License Status:</span>
            <span className="font-semibold text-yellow-600">{user.licenseStatus}</span>
          </div>
          <div className="flex justify-between">
            <span>Driving School:</span>
            <span className="font-medium">{user.drivingSchool}</span>
          </div>
          <div className="flex justify-between">
            <span>Application Date:</span>
            <span>{user.applicationDate}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Download Digital License (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

