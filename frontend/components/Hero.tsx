export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
      {/* Background hex grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 24 L76 68 L40 88 L4 68 L4 24 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 92px",
        }}
      />

      {/* Scattered dots */}
      <div className="absolute top-32 left-1/4 w-1 h-1 bg-white/40 rounded-full" />
      <div className="absolute top-48 right-1/3 w-1 h-1 bg-white/30 rounded-full" />
      <div className="absolute bottom-48 left-1/3 w-1 h-1 bg-white/30 rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-white/40 rounded-full" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Decentralized Finance
          <br />
          for Families and Teams
        </h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          Manage shared funds with multi-signature security on Stellar network
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white text-[#050d1a] font-semibold text-sm rounded hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white/30 text-white text-sm rounded hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
