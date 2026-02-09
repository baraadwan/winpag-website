import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-balance">
          Ready to give your site a brain?
        </h2>
        <p className="text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
          Start your free 7-day trial. No credit card required. See your first
          AI hypothesis within minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a href="https://app.winpag.com">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Join Webflow teams already using Winpag to grow conversions.
        </p>
      </div>
    </section>
  );
}
