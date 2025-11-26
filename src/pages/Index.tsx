import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Copy, Check } from "lucide-react";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import DeviceComparison from "@/components/sections/DeviceComparison";
import FutureProof from "@/components/sections/FutureProof";
import ValueBreakdown from "@/components/sections/ValueBreakdown";
import UseCases from "@/components/sections/UseCases";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Compare", href: "#comparison" },
    { label: "Future-Proof", href: "#future" },
    { label: "Value", href: "#value" },
    { label: "Use Cases", href: "#usecases" },
  ];

  const finalMessage = `After comparing all available tablets in this price range, the OnePlus Pad 3 offers the best performance-to-value ratio. The Snapdragon 8 Elite, 144Hz 3.4K display, and 8-speaker system deliver flagship performance at a significantly lower cost than comparable iPads. For the practical tasks you'll use it for, this is the most sensible choice.

— JS Abhishek`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">OnePlus Pad 3</div>
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <FeaturesGrid />
      <DeviceComparison />
      <FutureProof />
      <ValueBreakdown />
      <UseCases />

      {/* Final Message Section */}
      <section className="section-padding max-w-4xl mx-auto">
        <Card className="p-8 bg-card border-border card-glow">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="relative">
            <pre className="text-sm md:text-base text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
              {finalMessage}
            </pre>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="absolute top-0 right-0"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
