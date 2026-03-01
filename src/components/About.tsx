"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Integritas",
    desc: "Transparansi & kejujuran dalam setiap kemitraan bisnis",
  },
  {
    title: "Profesional",
    desc: "Tim berpengalaman dengan standar layanan tinggi",
  },
  {
    title: "Inovatif",
    desc: "Solusi teknologi terkini sesuai kebutuhan industri",
  },
  {
    title: "Solutif",
    desc: "Pendekatan problem-solving yang efektif & efisien",
  },
];

const contactStrip = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Alamat",
    value:
      "The Address @Cibubur Cluster Ultima B16, Jl. Leuwinanggung, Tapos — Depok",
    nowrap: false,
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "yasersyahrul@gmail.com",
    nowrap: true,
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 9.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
    label: "Telepon",
    value: "+62 811 8160 969",
    nowrap: true,
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-[#F8F9FC] py-24 px-[5%]" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top — label + title + desc */}
        <div className="max-w-3xl">
          <div className="fade-up text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5A623] flex items-center gap-2.5 mb-4">
            <span className="inline-block w-7 h-0.5 bg-[#F5A623]" />
            Tentang Kami
          </div>
          <h2
            className="fade-up delay-1 font-display font-extrabold text-[#081A3A] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            Mitra Bisnis Anda di
            <br />
            Ekosistem Pembayaran
          </h2>
          <p className="fade-up delay-2 text-[#4A5568] font-light leading-relaxed text-base text-justify max-w-2xl">
            CV Bangda Bertiga Karya adalah perusahaan solusi teknologi dan
            pembayaran yang berkomitmen menjadi penghubung antara kebutuhan
            bisnis Anda dengan teknologi terbaik. Kami hadir sebagai
            fasilitator, supplier, dan mitra implementasi yang terpercaya.
          </p>
        </div>

        {/* Value cards — 4 col desktop, 2 col tablet, 1 col mobile */}
        <div className="fade-up delay-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-[#EEF1F7] border-l-[3px] border-l-[#F5A623] rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="font-display font-bold text-[#081A3A] text-sm mb-2">
                {v.title}
              </div>
              <div className="text-[#4A5568] text-xs leading-relaxed">
                {v.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip — horizontal desktop, vertical mobile */}
        <div className="fade-up delay-4 border-t border-[#EEF1F7] pt-8">
          <div className="flex flex-col sm:flex-row">
            {contactStrip.map((item) => (
              <div
                key={item.label}
                className="flex-1 flex items-start gap-3 py-3 sm:py-0 sm:pr-6 last:sm:pr-0"
              >
                <div className="w-8 h-8 bg-[#081A3A] rounded-md flex items-center justify-center flex-shrink-0 text-[#F5A623] mt-0.5">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#94A3B8] mb-0.5">
                    {item.label}
                  </div>
                  <div
                    className={`text-[#1A202C] text-sm font-medium leading-relaxed ${item.nowrap ? "whitespace-nowrap" : ""}`}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
