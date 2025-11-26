import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          OnePlus Pad 3
          <br />
          <span className="text-gradient">Practical Power That Makes Sense</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          As a Computer Science Engineering student, I compared tablets across performance, display quality, 
          audio, and price. The OnePlus Pad 3 has the best performance-to-value ratio.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="text-lg" asChild>
            <a href="#comparison">Compare with iPad</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg" asChild>
            <a href="#future">See Benchmarks</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg" asChild>
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
