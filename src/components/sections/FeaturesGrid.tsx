import { Card } from "@/components/ui/card";
import { Cpu, Monitor, Zap, Palette, Speaker, Battery, Smartphone, Wifi, Pen, Camera, Shield } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Snapdragon 8 Elite",
    spec: "4nm flagship processor",
    why: "Flagship-tier performance for multitasking, gaming, and app development"
  },
  {
    icon: Monitor,
    title: "13.2\" 3.4K Display",
    spec: "3168 × 2120 resolution",
    why: "Sharper than iPad Air, ideal for reading code and watching content"
  },
  {
    icon: Zap,
    title: "144Hz Refresh Rate",
    spec: "Adaptive 30-144Hz",
    why: "Smoother scrolling and animations than 60Hz iPads"
  },
  {
    icon: Palette,
    title: "12-bit Color Depth",
    spec: "68 billion colors",
    why: "More accurate colors for media consumption and creative work"
  },
  {
    icon: Monitor,
    title: "900 Nits Peak Brightness",
    spec: "HDR certified",
    why: "Visible outdoors and in bright environments"
  },
  {
    icon: Cpu,
    title: "12GB RAM",
    spec: "LPDDR5X",
    why: "Smooth multitasking without app reloads"
  },
  {
    icon: Smartphone,
    title: "256GB Storage",
    spec: "UFS 4.0",
    why: "Fast read/write speeds for app installations and file transfers"
  },
  {
    icon: Speaker,
    title: "8-Speaker System",
    spec: "Quad speakers on each side",
    why: "Twice the speakers of iPad Air for immersive audio"
  },
  {
    icon: Battery,
    title: "10,500 mAh Battery",
    spec: "67W fast charging",
    why: "Full day usage with quick recharge times"
  },
  {
    icon: Smartphone,
    title: "Aluminum Unibody",
    spec: "Premium build quality",
    why: "Durable construction with premium feel"
  },
  {
    icon: Wifi,
    title: "Wi-Fi 7 + 5G",
    spec: "Latest connectivity",
    why: "Future-proof network standards for years of use"
  },
  {
    icon: Pen,
    title: "Stylus Support",
    spec: "4,096 pressure levels",
    why: "Precise input for note-taking and sketching wireframes"
  },
  {
    icon: Camera,
    title: "13MP Cameras",
    spec: "Front & rear",
    why: "Good enough for video calls and document scanning"
  },
  {
    icon: Shield,
    title: "Android 15",
    spec: "4 years OS updates",
    why: "Long-term software support with latest Android features"
  }
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-padding max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Complete Specifications</h2>
      <p className="text-center text-muted-foreground mb-12">
        Every spec matters. Here's what you get and why it's practical.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="p-6 bg-card border-border hover:card-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <feature.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-primary mb-2">{feature.spec}</p>
            <p className="text-sm text-muted-foreground">{feature.why}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
