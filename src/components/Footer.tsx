import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#081A3A] border-t border-white/[0.06] pt-12 pb-7 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-9 border-b border-white/[0.07] mb-6">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#hero" className="no-underline inline-block mb-3">
              <Logo />
            </a>
            <p className="text-white/45 text-sm leading-relaxed">
              Mitra strategis payment &amp; teknologi terpercaya untuk bisnis Anda.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-3">Navigasi</div>
              <ul className="flex flex-col gap-2.5 list-none">
                {[
                  { href: "#about", label: "Tentang Kami" },
                  { href: "#services", label: "Layanan" },
                  { href: "#why-us", label: "Keunggulan" },
                  { href: "#contact", label: "Kontak" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-white/55 hover:text-[#F5A623] text-sm no-underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-3">Layanan</div>
              <ul className="flex flex-col gap-2.5 list-none">
                {["Payment Solutions", "Infrastructure & Install", "General Supplier"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-white/55 hover:text-[#F5A623] text-sm no-underline transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © 2025 <span className="text-[#F5A623]">CV Bangda Bertiga Karya</span>. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs no-underline transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
