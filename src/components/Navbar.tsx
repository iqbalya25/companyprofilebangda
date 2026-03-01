"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: "Tentang Kami" },
    { href: "#services", label: "Layanan" },
    { href: "#why-us", label: "Keunggulan" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#081A3A] shadow-[0_2px_16px_rgba(0,0,0,0.25)] py-2 px-[5%]">
        <a href="#hero" className="no-underline">
          <Logo size={40} textSize="text-[13px]" />
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-[#F5A623] text-sm font-medium tracking-wide transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-[#F5A623] hover:bg-[#FFBE55] text-[#081A3A] font-semibold text-sm px-5 py-2 rounded transition-all no-underline"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[140] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-[150] w-72 bg-[#081A3A] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0 shadow-[-8px_0_32px_rgba(0,0,0,0.35)]" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
          <Logo size={36} textSize="text-[13px]" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] rounded transition-all border-none cursor-pointer"
            aria-label="Tutup menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[15px] text-white/80 hover:text-[#F5A623] hover:bg-white/[0.05] px-4 py-3 rounded-md transition-all no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="px-6 pb-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-[#F5A623] hover:bg-[#FFBE55] text-[#081A3A] font-semibold text-sm py-3 rounded transition-all no-underline"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </>
  );
}
