"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Winpag really hands-off?",
    a: "Not completely. You review and approve every hypothesis before it runs. But we handle experiment design, statistical analysis, and variant management. It's hands-off on implementation, hands-on on strategy.",
  },
  {
    q: "What if I don't trust the AI recommendation?",
    a: "You're always in control. If you don't like a proposed test, skip it or suggest your own. Over time, Winpag learns your preferences and gets better.",
  },
  {
    q: "How long until I see results?",
    a: "Most tests complete in 7-10 days with statistical confidence. First results usually appear after 2-3 weeks. Improvements compound from there.",
  },
  {
    q: "Do you store visitor data?",
    a: "No. Winpag runs inside your Webflow site. Variant data is generated live. We never store visitor information or conversion data on our servers.",
  },
  {
    q: "Can I use Winpag on multiple pages?",
    a: "Yes. We focus on one page at a time for strategic depth, but you can run experiments across multiple pages simultaneously.",
  },
  {
    q: "What if a test hurts conversions?",
    a: "The losing variant never goes live. Only winners get deployed. We also set guardrails to prevent significant drops during testing.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden transition-colors hover:border-accent/20"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-medium text-base pr-4">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
