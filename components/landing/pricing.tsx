import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Unlimited experiments",
  "AI-powered weekly hypotheses",
  "Full A/B testing engine",
  "Statistical significance analysis",
  "Business context memory",
  "Winner explanations and learnings",
  "Priority support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-4">
            One plan. Everything included.
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            No confusing tiers. No feature gates. Just clear pricing that works.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-background border-2 border-accent/30 rounded-2xl p-8 md:p-10 space-y-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
              Most Popular
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Professional</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold">$59</span>
                <span className="text-muted-foreground text-lg">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                7-day free trial included
              </p>
            </div>

            <a href="https://app.winpag.com" className="block">
              <Button className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <div className="space-y-3 pt-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          No credit card required to start. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
