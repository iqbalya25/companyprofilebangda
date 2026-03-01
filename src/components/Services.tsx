"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Payment Solutions",
    desc: "Fasilitasi & implementasi sistem pembayaran digital yang aman, efisien, dan terintegrasi untuk kebutuhan bisnis Anda.",
    points: [
      "Penyelenggara Jasa Pembayaran (PJP)",
      "Infrastruktur Sistem Pembayaran (PIP)",
      "Layanan Penunjang Sistem Pembayaran",
      "Konsultasi & Integrasi Payment Gateway",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    delay: "",
  },
  {
    title: "Infrastructure & Installation",
    desc: "Supply dan instalasi infrastruktur telekomunikasi & teknologi informasi yang handal untuk mendukung operasional bisnis Anda.",
    points: [
      "Instalasi Jaringan Telekomunikasi",
      "Infrastruktur IT & Server",
      "IoT Consulting & Implementation",
      "Maintenance & Technical Support",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    delay: "delay-1",
  },
  {
    title: "General Supplier & Trading",
    desc: "Pengadaan perangkat teknologi, mesin kantor, dan solusi IT terpadu — menjadi makelar terpercaya antara vendor dan kebutuhan bisnis Anda.",
    points: [
      "Pengadaan Perangkat & Mesin Kantor",
      "Perdagangan Teknologi & IT Equipment",
      "Pergudangan & Manajemen Logistik",
      "Vendor Management & Procurement",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop",
    delay: "delay-2",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-24 px-[5%] bg-[#081A3A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 80px)" }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-14">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5A623] flex items-center gap-2.5 mb-3">
            <span className="inline-block w-7 h-0.5 bg-[#F5A623]" />
            Layanan Utama
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            3 Pilar Solusi<br />Bisnis Kami
          </h2>
        </div>
        <p className="text-white/55 font-light text-base max-w-xs md:text-right leading-relaxed">
          Kami siap menjadi mitra strategis Anda dari awal hingga implementasi penuh.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {services.map((svc) => (
          <div
            key={svc.title}
            className={`fade-up ${svc.delay} group relative rounded-xl overflow-hidden flex flex-col border border-white/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]`}
          >
            {/* Fixed height photo */}
            <div className="relative h-52 flex-shrink-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url('${svc.image}')`, opacity: 0.55 }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(8,26,58,0.1) 0%, rgba(8,26,58,0.6) 100%)" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7 bg-[#0d2247]">
              <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">
                {svc.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-5 text-justify">
                {svc.desc}
              </p>
              <ul className="flex flex-col gap-2.5 mt-auto">
                {svc.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-white/70 text-[13px]">
                    <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full flex-shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "linear-gradient(90deg, #F5A623, #FFBE55)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
