"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Winpag"
          width={120}
          height={32}
          className="h-7"
          style={{ width: "auto" }}
          priority
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            FAQ
          </a>
          <a href="https://app.winpag.com">
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 ml-2"
            >
              Start Free Trial
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 pt-2 space-y-4">
          <a
            href="#how-it-works"
            className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#features"
            className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </a>
          <a href="https://app.winpag.com" className="block pt-2">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Start Free Trial
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
