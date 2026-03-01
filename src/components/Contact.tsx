"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="bg-[#F8F9FC] py-24 px-[5%]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="fade-up text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5A623] flex items-center gap-2.5 mb-3">
              <span className="inline-block w-7 h-0.5 bg-[#F5A623]" />
              Hubungi Kami
            </div>
            <h2
              className="fade-up delay-1 font-display font-extrabold text-[#081A3A] leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
            >
              Mari Berdiskusi<br />Tentang Kebutuhan Anda
            </h2>
            <p className="fade-up delay-2 text-[#4A5568] font-light text-base leading-relaxed text-justify">
              Kami siap mendengar dan memberikan solusi terbaik untuk kebutuhan payment &amp; teknologi bisnis Anda.
            </p>
          </div>

          <div className="fade-up delay-2 flex flex-col gap-4">
            {[
              {
                label: "Alamat",
                value: "The Address @Cibubur Cluster Ultima B16\nJl. Leuwinanggung, Tapos — Depok",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                value: "yasersyahrul@gmail.com\nd.asyraf@gmail.com",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#081A3A] rounded-md flex items-center justify-center flex-shrink-0 text-[#F5A623]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#94A3B8] mb-1">{item.label}</div>
                  <div className="text-[#081A3A] font-medium text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="fade-up delay-1 bg-white rounded-lg p-8 md:p-10 border border-[#EEF1F7]">
          <h3 className="font-display font-bold text-[#081A3A] text-xl mb-1">Kirim Pesan</h3>
          <p className="text-[#4A5568] text-sm mb-7 leading-relaxed">
            Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { id: "name", label: "Nama Lengkap", placeholder: "John Doe", type: "text" },
              { id: "company", label: "Nama Perusahaan", placeholder: "PT Maju Bersama", type: "text" },
              { id: "email", label: "Email", placeholder: "john@company.com", type: "email" },
              { id: "phone", label: "Nomor Telepon", placeholder: "+62 8xx xxxx xxxx", type: "tel" },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label htmlFor={field.id} className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id as keyof typeof form]}
                  onChange={handleChange}
                  className="bg-[#F8F9FC] border border-[#EEF1F7] rounded px-4 py-3 text-sm text-[#081A3A] outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label htmlFor="service" className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]">
              Layanan yang Diminati
            </label>
            <select
              id="service"
              value={form.service}
              onChange={handleChange}
              className="bg-[#F8F9FC] border border-[#EEF1F7] rounded px-4 py-3 text-sm text-[#081A3A] outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
            >
              <option value="" disabled>Pilih layanan...</option>
              <option>Payment Solutions (PJP/PIP)</option>
              <option>Infrastructure &amp; Installation</option>
              <option>General Supplier &amp; Trading</option>
              <option>Konsultasi Umum</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 mb-6">
            <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]">
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Ceritakan kebutuhan bisnis Anda..."
              value={form.message}
              onChange={handleChange}
              className="bg-[#F8F9FC] border border-[#EEF1F7] rounded px-4 py-3 text-sm text-[#081A3A] outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-y"
            />
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#081A3A] hover:bg-[#1B3A6B] text-white font-semibold text-sm py-3.5 rounded transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(8,26,58,0.25)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
            </svg>
            Kirim Pesan
          </button>
        </div>

      </div>
    </section>
  );
}
