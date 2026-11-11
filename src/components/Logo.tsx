import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg ${className}`}
      aria-label="Venayaka Balcony Safety Net Homepage"
    >
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-700 via-green-800 to-emerald-950 text-white shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-emerald-300"
        >
          {/* Shield */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          {/* Netting grid lines */}
          <path d="M8 8l8 8" strokeWidth="1.5" stroke="#86efac" />
          <path d="M16 8l-8 8" strokeWidth="1.5" stroke="#86efac" />
          <circle cx="12" cy="12" r="1.5" fill="#4ade80" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-black text-lg md:text-xl tracking-tight leading-tight uppercase font-sans ${
            isLight ? "text-white" : "text-emerald-950"
          }`}
        >
          Venayaka
        </span>
        <span
          className={`text-xs md:text-xs font-semibold tracking-wider uppercase ${
            isLight ? "text-emerald-300" : "text-emerald-700"
          }`}
        >
          Balcony Safety Net
        </span>
      </div>
    </Link>
  );
}

