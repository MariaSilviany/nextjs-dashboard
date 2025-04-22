"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Jolly_Lodger } from "next/font/google";

// Instal Jolly Lodger font
const jollyLodger = Jolly_Lodger({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // uname pass yang benar
  const adminCredentials = {
    email: "admin123@gmail.com",
    password: "12345",
  };

  const customerCredentials = {
    email: "user123@gmail.com",
    password: "12345",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state
    setError("");

    if (!email && !password) {
      setError("Email dan Password tidak boleh kosong!");
    } else if (!email) {
      setError("Email tidak boleh kosong!");
    } else if (!password) {
      setError("Password tidak boleh kosong!");
    } else if (
      email !== adminCredentials.email &&
      email !== customerCredentials.email &&
      password !== adminCredentials.password &&
      password !== customerCredentials.password
    ) {
      setError("Email dan Password salah!");
    } else if (email === adminCredentials.email && password !== adminCredentials.password) {
      setError("Password salah!");
    } else if (email === customerCredentials.email && password !== customerCredentials.password) {
      setError("Password salah!");
    } else if (email !== adminCredentials.email && email !== customerCredentials.email && password) {
      setError("Email salah!");
    } else if (email === adminCredentials.email && password === adminCredentials.password) {
      alert("Login Sukses!");
      router.push("/admin-dashboard");
    } else if (email === customerCredentials.email && password === customerCredentials.password) {
      alert("Login Sukses!");
      router.push("/");
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
      
      <div className="w-96 bg-black bg-opacity-50 rounded-lg shadow-10xl ">
        {/* Title  */}
        <div className="text-center py-4">
            <h2 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
                <span className="text-gray-100"> Sign in </span>
            </h2>
        </div>

        <form className="px-8 pb-8 space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-gray-800 border text-white rounded-md px-4 py-2 text-sm ${
                error.includes("Email") || error.includes("Email dan Password")
                  ? "border-red-500"
                  : "border-gray-700"
              }`}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-gray-800 border text-white rounded-md px-4 py-2 text-sm ${
                error.includes("Password") || error.includes("Email dan Password")
                  ? "border-red-500"
                  : "border-gray-700"
              }`}
            />
          </div>
          
          {error && <p className="text-sm text-red-500">{error}</p>}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 border-gray-700 rounded" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                Ingat Saya
              </label>
            </div>
            <a href="/lupapass" className="text-sm text-gray-400 hover:text-blue-300">
              Lupa Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
          >
            Masuk
          </button>
        </form>
        <p className="mb-7 text-center text-sm text-gray-400">
          Tidak punya akun?{" "}
          <a href="/register" className="text-white hover:underline">
            Daftar 
          </a>
        </p>
      </div>
    </main>
  );
}