export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-56px)] flex items-center overflow-hidden bg-[#081A3A]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop')",
          opacity: 0.38,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,26,58,0.72) 0%, rgba(8,26,58,0.55) 50%, rgba(8,26,58,0.68) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{
          background:
            "linear-gradient(90deg, #F5A623 0%, #FFBE55 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 px-[5%] py-20 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-[#F5A623]/12 border border-[#F5A623]/30 text-[#F5A623] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-sm mb-7">
          <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
          Payment &amp; Technology Solutions
        </div>

        <h1
          className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: "clamp(36px, 7vw, 50px)" }}
        >
          Solusi Pembayaran &amp;
          <br />
          Infrastruktur Teknologi
          <br />
          <span className="text-[#F5A623]">Terpercaya</span>
        </h1>

        <p
          className="text-white/70 font-light leading-relaxed mb-10 max-w-lg text-justify"
          style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
        >
          CV Bangda Bertiga Karya hadir sebagai mitra strategis bisnis Anda —
          dari fasilitasi sistem pembayaran, instalasi infrastruktur teknologi,
          hingga pengadaan perangkat &amp; solusi IT terpadu.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#FFBE55] text-[#081A3A] font-semibold text-sm px-8 py-3.5 rounded transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,166,35,0.35)] no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            Lihat Layanan Kami
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-white font-medium text-sm px-8 py-3.5 rounded border border-white/30 hover:border-white/70 hover:bg-white/[0.07] transition-all no-underline"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
