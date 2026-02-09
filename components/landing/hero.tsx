import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Social proof chip */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-muted-foreground">Built for Webflow teams</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
            Your Webflow site,{" "}
            <span className="text-accent">improving every week</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Winpag learns your business, decides what to test, and optimizes your
            conversions autonomously. You just approve the winners.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 animate-fade-in-up-delay-1">
            <a href="https://app.winpag.com">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base w-full sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card h-12 px-8 text-base bg-transparent w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-in-up-delay-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              7-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Cancel anytime
            </span>
          </div>
        </div>

        {/* Hero Visual - Live test dashboard mockup */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up-delay-3">
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Mock toolbar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/40">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-muted" />
                <div className="h-3 w-3 rounded-full bg-muted" />
                <div className="h-3 w-3 rounded-full bg-muted" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background border border-border rounded-md px-4 py-1 text-xs text-muted-foreground w-64 text-center">
                  app.winpag.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Status bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Active Experiment</p>
                  <p className="text-lg font-semibold mt-1">Headline Clarity Test</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-600">Running - Day 5 of 7</span>
                </div>
              </div>

              {/* Variants comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Control */}
                <div className="border border-border rounded-xl p-5 bg-background space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Control</span>
                    <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground font-medium">2,340 visitors</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">{"\"Start your free trial today\""}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-semibold">2.4%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[24%] bg-muted-foreground/30 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Winner */}
                <div className="border-2 border-accent/40 rounded-xl p-5 bg-accent/[0.03] space-y-4 relative">
                  <div className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Winning +46%
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Variant B</span>
                    <span className="text-xs bg-accent/10 px-2.5 py-1 rounded-full text-accent font-medium">2,280 visitors</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">{"\"Get instant access - it's free\""}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-semibold text-accent">3.5%</span>
                    </div>
                    <div className="h-2 bg-accent/10 rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center p-3 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold">4,620</p>
                  <p className="text-xs text-muted-foreground mt-1">Total Visitors</p>
                </div>
                <div className="text-center p-3 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold text-accent">96%</p>
                  <p className="text-xs text-muted-foreground mt-1">Confidence</p>
                </div>
                <div className="text-center p-3 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold">2 days</p>
                  <p className="text-xs text-muted-foreground mt-1">Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
