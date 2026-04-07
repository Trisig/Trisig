export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-10 py-8 max-w-6xl mx-auto w-full">
      <div className="flex items-center justify-between">
        {/* Logo placeholder */}
        <div className="w-24 h-6 border border-white/20 rounded" />

        {/* Links */}
        <div className="flex items-center gap-8 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#stats" className="hover:text-white transition-colors">
            Security
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Docs
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border border-white/20 hover:border-white/50 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
