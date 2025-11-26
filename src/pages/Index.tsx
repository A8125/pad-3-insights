import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import DeviceComparison from "@/components/sections/DeviceComparison";
import FutureProof from "@/components/sections/FutureProof";
import ValueBreakdown from "@/components/sections/ValueBreakdown";
import UseCases from "@/components/sections/UseCases";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Compare", href: "#comparison" },
    { label: "Future-Proof", href: "#future" },
    { label: "Value", href: "#value" },
    { label: "Use Cases", href: "#usecases" },
  ];


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
      <Footer />
    </div>
  );
};

export default Index;
