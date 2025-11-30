import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-scale-in">
          <span className="inline-block hover:scale-105 transition-transform">OnePlus Pad 3</span>
          <br />
          <span className="text-gradient inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>Practical Power That Makes Sense</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          As a Computer Science Engineering student, I compared tablets across performance, display quality, 
          audio, and price. The OnePlus Pad 3 has the best performance-to-value ratio.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="text-lg hover:scale-105 transition-all duration-300" asChild>
            <a href="#comparison">Compare with iPad</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg hover:scale-105 transition-all duration-300" asChild>
            <a href="#future">See Benchmarks</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg hover:scale-105 transition-all duration-300" asChild>
            <a href="#value">Value Breakdown</a>
          </Button>
        </div>
      </div>

      <a 
        href="#features" 
        className="absolute bottom-10 animate-bounce cursor-pointer hover:text-primary transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
