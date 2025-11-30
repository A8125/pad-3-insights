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
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-slide-in-right">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient hover:scale-105 transition-transform cursor-pointer">OnePlus Pad 3</div>
            <div className="hidden md:flex gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
