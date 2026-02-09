const stats = [
  { value: "+27%", label: "Avg. Conversion Lift", sub: "across active users" },
  { value: "15 min", label: "Setup to First Test", sub: "no code required" },
  { value: "100%", label: "Webflow Native", sub: "no migration needed" },
];

export function Results() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance">
            Improvements that compound, not reset
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-card border border-border rounded-xl p-8"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="font-medium text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="bg-card border border-border rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
            The Winpag Philosophy
          </div>
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed text-balance">
            {"\"We didn't just redesign your site. We gave it a brain. Now it improves itself every week.\""}
          </p>
        </div>
      </div>
    </section>
  );
}
