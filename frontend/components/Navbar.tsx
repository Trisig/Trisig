export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 border-b border-white/10 bg-[#050d1a]/80 backdrop-blur-sm">
      {/* Logo */}
      <span className="text-white font-bold text-xl tracking-tight">
        TriSig
      </span>

      {/* Links */}
      <div className="flex items-center gap-8 text-sm text-white/70">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#stats" className="hover:text-white transition-colors">
          Security
        </a>
        <a href="#guardian" className="hover:text-white transition-colors">
          Guardian
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Docs
        </a>
      </div>

      {/* CTA */}
      <button className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded hover:bg-white/10 transition-colors">
        Launch App
      </button>
    </nav>
  );
}
