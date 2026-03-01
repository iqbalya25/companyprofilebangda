"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Legalitas Terjamin",
    desc: "Badan hukum resmi dengan KBLI lengkap di bidang payment, telekomunikasi, dan teknologi informasi.",
    delay: "",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    title: "End-to-End Service",
    desc: "Dari konsultasi awal, pengadaan, instalasi, hingga purna jual — semua ditangani oleh satu mitra terpercaya.",
    delay: "delay-1",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Mitra Strategis B2B",
    desc: "Fokus melayani kebutuhan korporat, institusi keuangan, dan bisnis skala menengah hingga besar.",
    delay: "delay-2",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Responsif & Agile",
    desc: "Tim yang gesit dan solutif, siap merespons kebutuhan Anda dengan cepat dan tepat sasaran.",
    delay: "delay-3",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="bg-white py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5A623] gap-2 mb-3">
            Keunggulan Kami
          </div>
          <h2
            className="font-display font-extrabold text-[#081A3A] leading-tight tracking-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            Mengapa Memilih<br />Bangda Bertiga Karya?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`fade-up ${r.delay} bg-[#F8F9FC] border border-[#EEF1F7] rounded-lg p-7 text-center transition-all duration-300 hover:border-[#F5A623]/40 hover:shadow-[0_8px_32px_rgba(245,166,35,0.1)] hover:-translate-y-1`}
            >
              <div className="w-14 h-14 bg-[#081A3A] rounded-full flex items-center justify-center mx-auto mb-5 text-[#F5A623]">
                {r.icon}
              </div>
              <div className="font-display font-bold text-[#081A3A] text-[17px] mb-2">{r.title}</div>
              <p className="text-[#4A5568] text-[13px] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
