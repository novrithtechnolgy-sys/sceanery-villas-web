import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      {/* Success Icon */}
      <FaCheckCircle className="text-gray-900 text-6xl mb-4" />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>

      {/* Sub Text */}
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        Your message has been sent successfully. <br />
        We’ll get back to you as soon as possible.
      </p>

      {/* Back Button */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-[#09263d] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
