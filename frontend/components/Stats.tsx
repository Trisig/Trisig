const stats = [
  { value: "$2.4M", label: "Assets Secured" },
  { value: "1,200+", label: "Active Groups" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative px-10 py-20 max-w-6xl mx-auto">
      <div className="absolute left-1/3 top-8 w-1 h-1 bg-white/30 rounded-full" />

      <div className="grid grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-5xl font-bold text-white mb-2">{s.value}</p>
            <p className="text-white/40 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
