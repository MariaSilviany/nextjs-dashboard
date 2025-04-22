"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";

// Instal Jolly Lodger font
const jollyLodger = Jolly_Lodger({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function LupaPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const registeredEmails = ["customer@gmail.com", "admin@gmail.com"]; // Example registered emails

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage({
        type: "error",
        text: "Email tidak boleh kosong!",
      });
      return;
    }
    if (registeredEmails.includes(email.toLowerCase())) {
      setMessage({
        type: "success",
        text: "Email verifikasi telah dikirim. Silahkan cek inbox email Anda.",
      });
    } else {
      setMessage({
        type: "error",
        text: "Email tidak terdaftar!",
      });
    }
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Logo/Title outside the black box */}
      <div className="w-full flex justify-center mb-4">
        <h1 className={`text-8xl font-bold drop-shadow-lg ${jollyLodger.className}`}style={{ WebkitTextStroke: "0.8px white" }}>
          <span className="text-blue-400">Haunted</span>
          <span className="text-red-900">Hollow</span>
        </h1>
      </div>
      <div className="w-full max-w-sm rounded-lg bg-black bg-opacity-50 p-8 shadow-10xl">
        {/* Title  */}
        <div className="text-center py-4">
            <h2 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
                <span className="text-gray-100"> Lupa Password </span>
            </h2>
        </div>
        <p className="mt--2 text-center text-sm text-gray-300">
            Masukkan Email Untuk Mereset Password
        </p>
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-80 bg-gray-800 border text-white rounded-md px-4 py-2 text-sm focus:border-gray-400 block mx-auto "
            />
          </div>
          {/* Message */}
          {message && (
            <div
              className={`rounded-lg px-4 py-3 text-sm ${
                message.type === "success"
                  ? "bg-green-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.type === "success" ? (
                <div className="flex items-start">
                  <div className="mr-2 flex-shrink-0 mt-0.5">
                    <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>{message.text}</div>
                </div>
              ) : (
                message.text
              )}
            </div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-80 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors block mx-auto"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Kembali ke{" "}
          <Link href="/login" className="text-gray-200 hover:underline">
            halaman login
          </Link>
        </p>
      </div>
    </main>
  );
}

