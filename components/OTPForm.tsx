import { useState } from "react";

interface Props {
  userData: any;
  onVerified: () => void;
}

export default function OTPForm({ userData, onVerified }: Props) {
  const [phone, setPhone] = useState(userData?.phone || "");
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const fakeOtp = "123456"; // Simulated OTP

  const handleSend = () => {
    setSent(true);
    alert(`Simulated OTP sent: ${fakeOtp}`);
  };

  const handleVerify = () => {
    if (otp === fakeOtp) {
      onVerified();
    } else {
      setError("Incorrect OTP");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">OTP Verification</h2>

      <label className="block mb-2">Phone Number</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {!sent ? (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send OTP
        </button>
      ) : (
        <>
          <label className="block mt-4 mb-2">Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 rounded w-full mb-2"
            placeholder="Enter 6-digit OTP"
          />
          {error && <p className="text-red-500">{error}</p>}

          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
            onClick={handleVerify}
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}

