export default function Guardian() {
  return (
    <section id="guardian" className="relative px-10 py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
            Guardian Accounts
          </p>
          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            Protect Your Assets
            <br />
            with Trusted
            <br />
            Guardians
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Designate trusted family members or friends as guardians who can
            help recover access or manage funds in emergencies. Built-in
            safeguards ensure your assets remain secure while providing peace of
            mind.
          </p>
        </div>

        {/* Right card placeholder */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/30 rounded-full" />
          <div className="border border-white/15 rounded-xl aspect-video bg-white/[0.02]" />
        </div>
      </div>
    </section>
  );
}
