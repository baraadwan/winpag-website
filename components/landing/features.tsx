import { Brain, Zap, TrendingUp, Shield, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Persistent Business Memory",
    desc: "Winpag remembers your ICP, goals, brand tone, and constraints. Tests get smarter every single week as learnings compound.",
  },
  {
    icon: Zap,
    title: "Hypotheses, Not Guesses",
    desc: "Every test starts with a clear hypothesis: what will change, why it matters, and expected impact. No random experiments.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Results",
    desc: "Each test builds on the last. Week 2 is smarter than Week 1. Improvements stack up and lock in over time.",
  },
  {
    icon: Shield,
    title: "Human Approval, Always",
    desc: "AI proposes. You approve. No black boxes, no surprises. Every test runs only after your review.",
  },
  {
    icon: Target,
    title: "Webflow-Native",
    desc: "One script tag. No code changes to your site. Tests run directly on your live Webflow pages without any export or migration.",
  },
  {
    icon: BarChart3,
    title: "Statistical Rigor",
    desc: "Every test runs until statistical significance. No premature conclusions. Clear winner/no-winner states you can trust.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-4">
            Autonomous CRO with human control
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Everything your conversion rate needs. Nothing it doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-background border border-border rounded-xl p-7 space-y-4 hover:border-accent/30 transition-colors group"
              >
                <div className="h-11 w-11 bg-accent/[0.08] rounded-lg flex items-center justify-center group-hover:bg-accent/[0.12] transition-colors">
                  <IconComponent className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
