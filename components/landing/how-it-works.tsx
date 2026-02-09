import { Workflow, Brain, Sparkles, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Workflow,
    title: "Connect your Webflow site",
    desc: "Link your Webflow site in under 2 minutes. Add one script tag and you're live.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI learns your business",
    desc: "Tell Winpag who you sell to, your goals, and what matters. It remembers everything.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Review weekly hypotheses",
    desc: "Each week, AI proposes a focused test with clear reasoning. You approve or adjust.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Tests run automatically",
    desc: "Variants go live on your site. Real visitors, real data, real statistical confidence.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Approve the winner",
    desc: "AI explains what won and why. Deploy the best version. The cycle repeats, smarter.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance">
            From setup to results in 15 minutes
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-border" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-accent/[0.06] rounded-2xl" />
                    <IconComponent className="h-8 w-8 text-accent relative" />
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Onboarding Preview Mockup */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/40">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-muted" />
                <div className="h-3 w-3 rounded-full bg-muted" />
                <div className="h-3 w-3 rounded-full bg-muted" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background border border-border rounded-md px-4 py-1 text-xs text-muted-foreground w-64 text-center">
                  app.winpag.com/onboarding
                </div>
              </div>
            </div>

            {/* Onboarding content */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Brain className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Tell us about your business</p>
                  <p className="text-xs text-muted-foreground">Step 2 of 3</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-accent rounded-full" />
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">What does your company do?</label>
                  <div className="bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground">
                    We sell project management software for remote teams
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Who is your ideal customer?</label>
                  <div className="bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground">
                    Tech startup founders and team leads, 10-50 employees
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Primary conversion goal</label>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-accent/[0.06] border-2 border-accent/40 rounded-lg px-4 py-3 text-sm font-medium text-accent text-center">
                      Free Trial Signups
                    </div>
                    <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground text-center">
                      Demo Bookings
                    </div>
                    <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground text-center">
                      Purchases
                    </div>
                  </div>
                </div>
              </div>

              {/* AI insight */}
              <div className="bg-accent/[0.04] border border-accent/20 rounded-lg px-4 py-3 flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">AI Context Building: </span>
                  Based on your inputs, Winpag will focus on headline clarity, trust signals, and CTA positioning for maximum trial signups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
