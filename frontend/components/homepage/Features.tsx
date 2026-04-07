const features = [
  {
    title: "Multi-Signature Security",
    description:
      "Require multiple approvals for transactions. Perfect for families, teams, and organizations managing shared funds.",
  },
  {
    title: "Stellar Network",
    description:
      "Built on Stellar's fast, low-cost blockchain infrastructure with enterprise-grade reliability and security.",
  },
  {
    title: "Guardian Accounts",
    description:
      "Set up trusted guardians who can help recover access or manage funds in case of emergencies.",
  },
];

function FeatureIcon() {
  return (
    <div className="w-12 h-12 border border-white/20 rounded mb-5 flex items-center justify-center">
      <div className="w-5 h-5 border border-white/40 rounded-sm" />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative px-10 py-24 max-w-6xl mx-auto">
      {/* Scattered dots */}
      <div className="absolute top-12 right-20 w-1 h-1 bg-white/30 rounded-full" />
      <div className="absolute bottom-12 left-1/2 w-1 h-1 bg-white/30 rounded-full" />

      <div className="grid grid-cols-3 gap-16">
        {features.map((f) => (
          <div key={f.title}>
            <FeatureIcon />
            <h3 className="text-white font-semibold text-base mb-3">
              {f.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
