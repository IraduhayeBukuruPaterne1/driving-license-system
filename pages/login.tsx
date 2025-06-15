import { useState } from "react";
import NationalIDForm from "../components/NationalIDForm";
import MethodSelector from "../components/MethodSelector";
import OTPForm from "../components/OTPForm";
import ConsentScreen from "../components/ConsentScreen";
import UserProfile from "../components/UserProfile";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<any>(null);
  const [loginMethod, setLoginMethod] = useState("");

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Login with MOSIP</h1>

      {/* Step 1: Enter National ID */}
      {step === 1 && (
        <NationalIDForm
          onSuccess={(data) => {
            setUserData(data);
            setStep(2);
          }}
        />
      )}

      {/* Step 2: Select Login Method */}
      {step === 2 && (
        <MethodSelector
          onSelect={(method) => {
            setLoginMethod(method);
            setStep(3);
          }}
        />
      )}

      {/* Step 3: OTP Login (simulated) */}
      {step === 3 && loginMethod === "otp" && (
        <OTPForm
          userData={userData}
          onVerified={() => setStep(4)}
        />
      )}

      {/* Step 4: Consent Screen */}
      {step === 4 && (
        <ConsentScreen
          userData={userData}
          onConsent={() => setStep(5)}
        />
      )}

      {/* Step 5: Show Verified Profile */}
      {step === 5 && (
        <UserProfile userData={userData} />
      )}
    </div>
  );
}

