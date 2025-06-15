// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Driving License System</h1>
        <p className="text-lg text-gray-700">Start by logging in to apply for or verify your driver’s license.</p>
        <Link href="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}

