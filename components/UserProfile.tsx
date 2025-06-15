interface Props {
  userData: any;
}

export default function UserProfile({ userData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {userData.name} ��</h2>
      <p className="mb-4">Your profile has been verified successfully.</p>

      <div className="border rounded p-4 shadow">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
        <p><strong>National ID:</strong> {userData.nationalId}</p>
      </div>
    </div>
  );
}

