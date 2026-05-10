"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const teamContacts = [
    {
      name: "Yaser Syahrul",
      role: "Director",
      email: "yasersyahrul@gmail.com",
    },
    {
      name: "Syahrul Asyraf",
      role: "Operations",
      email: "d.asyraf@gmail.com",
    },
    {
      name: "Lelitia Tamara",
      role: "Administration",
      email: "leli.babeka@gmail.com",
    },
  ];

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
              Mari Berdiskusi
              <br />
              Tentang Kebutuhan Anda
            </h2>
            <p className="fade-up delay-2 text-[#4A5568] font-light text-base leading-relaxed text-justify">
              Kami siap mendengar dan memberikan solusi terbaik untuk kebutuhan
              payment, teknologi, maupun merchandising bisnis Anda.
            </p>
          </div>

          {/* Address */}
          <div className="fade-up delay-2 flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 bg-[#081A3A] rounded-md flex items-center justify-center flex-shrink-0 text-[#F5A623]">
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
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#94A3B8] mb-1">
                  Alamat
                </div>
                <div className="text-[#081A3A] font-medium text-sm leading-relaxed whitespace-pre-line">
                  {
                    "The Address @Cibubur Cluster Ultima B16\nJl. Leuwinanggung, Tapos — Depok"
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Team contacts */}
          <div className="fade-up delay-3">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#94A3B8] mb-4">
              Tim Kami
            </div>
            <div className="flex flex-col gap-3">
              {teamContacts.map((person) => (
                <div
                  key={person.email}
                  className="flex items-center gap-4 bg-white border border-[#EEF1F7] rounded-lg px-4 py-3 hover:border-[#1B3A6B]/30 hover:shadow-sm transition-all"
                >
                  {/* Avatar initial */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                    style={{
                      background: "linear-gradient(135deg, #081A3A, #1B3A6B)",
                    }}
                  >
                    {person.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#081A3A] text-sm">
                      {person.name}
                    </div>
                    <div className="text-[#94A3B8] text-[11px] uppercase tracking-wide">
                      {person.role}
                    </div>
                  </div>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-[#F5A623] hover:text-[#FFBE55] text-[12px] font-medium no-underline transition-colors truncate max-w-[160px]"
                  >
                    {person.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="fade-up delay-1 bg-white rounded-lg p-8 md:p-10 border border-[#EEF1F7]">
          <h3 className="font-display font-bold text-[#081A3A] text-xl mb-1">
            Kirim Pesan
          </h3>
          <p className="text-[#4A5568] text-sm mb-7 leading-relaxed">
            Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24
            jam.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                id: "name",
                label: "Nama Lengkap",
                placeholder: "John Doe",
                type: "text",
              },
              {
                id: "company",
                label: "Nama Perusahaan",
                placeholder: "PT Maju Bersama",
                type: "text",
              },
              {
                id: "email",
                label: "Email",
                placeholder: "john@company.com",
                type: "email",
              },
              {
                id: "phone",
                label: "Nomor Telepon",
                placeholder: "+62 8xx xxxx xxxx",
                type: "tel",
              },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={field.id}
                  className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]"
                >
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
            <label
              htmlFor="service"
              className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]"
            >
              Layanan yang Diminati
            </label>
            <select
              id="service"
              value={form.service}
              onChange={handleChange}
              className="bg-[#F8F9FC] border border-[#EEF1F7] rounded px-4 py-3 text-sm text-[#081A3A] outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all"
            >
              <option value="" disabled>
                Pilih layanan...
              </option>
              <option>Payment Solutions (PJP/PIP)</option>
              <option>Infrastructure &amp; Installation</option>
              <option>General Supplier &amp; Trading</option>
              <option>Merchandising Solutions</option>
              <option>Konsultasi Umum</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 mb-6">
            <label
              htmlFor="message"
              className="text-[11px] font-semibold uppercase tracking-wide text-[#4A5568]"
            >
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Ceritakan kebutuhan Anda..."
              value={form.message}
              onChange={handleChange}
              className="bg-[#F8F9FC] border border-[#EEF1F7] rounded px-4 py-3 text-sm text-[#081A3A] outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none"
            />
          </div>
          <button
            type="button"
            className="w-full bg-[#F5A623] hover:bg-[#FFBE55] text-[#081A3A] font-semibold text-sm py-3.5 rounded transition-all hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)] cursor-pointer border-none"
          >
            Kirim Pesan →
          </button>
        </div>
      </div>
    </section>
  );
}
