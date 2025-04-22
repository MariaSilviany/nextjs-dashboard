"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";

// Instal Jolly Lodger font
const jollyLodger = Jolly_Lodger({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
  });  

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const router = useRouter();

  const validateFullName = (name: string) => {
    if (!name) {
      return "Nama lengkap tidak boleh kosong";
    }
    if (name.length < 8) {
      return "Nama harus minimal 8 karakter";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email) {
      return "Email tidak boleh kosong";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Email tidak valid, harus menyertakan @, gmail dan .com";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "Password tidak boleh kosong";
    }
    if (password.length < 8) {
      return "Minimal 8 karakter";
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (!hasUpperCase) {
      return "Password harus memiliki minimal 1 huruf besar";
    }
    if (!hasNumber) {
      return "Password harus memiliki minimal 1 angka";
    }
    if (!hasSpecialChar) {
      return "Password harus memiliki minimal 1 karakter khusus";
    }
    
    return "";
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword && confirmPassword !== formData.password) {
      return "Konfirmasi password tidak sesuai";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Validasi langsung saat mengetik untuk password
    if (name === "password") {
      setErrors({
        ...errors,
        [name]: validatePassword(value)
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.confirmPassword),
      terms: !formData.termsAccepted ? "Anda harus menyetujui Syarat & Ketentuan" : "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert("Registration Sukses!");
      router.push("/");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let error = "";
    if (name === "fullName") {
      error = validateFullName(value);
    } else if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validatePassword(value);
    } else if (name === "confirmPassword") {
      error = validateConfirmPassword(value);
    }
    
    setErrors({
      ...errors,
      [name]: error
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      <div className="w-full max-w-sm rounded-lg bg-black bg-opacity-50 p-8 shadow-10xl">
      <div className="text-center py-4">
            <h2 className={`text-4xl font-bold drop-shadow-lg ${jollyLodger.className}`}>
                <span className="text-gray-100">Register</span>
            </h2>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* username */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">
              username
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-gray-500 ${
                errors.fullName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"
              }`}
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </div>
          
          {/* email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-gray-500 ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          {/* password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password Anda"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-gray-500 ${
                errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"
              }`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          
          {/* konfirmasi password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Konfirmasi password Anda"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-gray-500 ${
                errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          
          {/* syarat dan ketentuan */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-[#E53E65] focus:ring-gray-200"
            />
            <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-600">
              Saya setuju dengan{" "}
              <span className="text-[#E53E65] hover:underline">
                Syarat & Ketentuan
              </span>
            </label>
          </div>
          {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}
          
          {/* tombol submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-[#E53E65] hover:underline">
            Masuk sekarang
          </Link>
        </p>
      </div>
    </main>
  );
}