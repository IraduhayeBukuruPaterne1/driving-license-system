interface Props {
  onSelect: (method: string) => void;
}

export default function MethodSelector({ onSelect }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Choose Authentication Method</h2>
      <div className="flex flex-col gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => onSelect("otp")}
        >
          Login with OTP
        </button>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => onSelect("biometric")}
        >
          Login with Biometric
        </button>

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={() => onSelect("pin")}
        >
          Login with PIN
        </button>
      </div>
    </div>
  );
}

