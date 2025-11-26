import { Card } from "@/components/ui/card";
import { Code, TestTube, Server, Layers, GitBranch, Cpu, Smartphone, Presentation, Battery, Globe } from "lucide-react";


const studentUseCases = [
  { 
    icon: Code, 
    title: "On-device Android App Development & Testing",
    description: "Run and debug Android apps directly (ADB/USB or wireless), test performance on a flagship SoC — real-device behavior is more reliable than emulator results."
  },
  {
    icon: Layers,
    title: "Quick Prototyping & UI Reviews",
    description: "Use the high-refresh 3.4K display to validate app animations, touch responsiveness, and UI layouts; stylus support helps sketch interaction ideas and wireframes."
  },
  {
    icon: Server,
    title: "Local Server & Tooling",
    description: "Run light local services (dev servers, REST mocks, DB instances via Termux) and test mobile-backend interactions with low latency on a powerful SoC."
  },
  {
    icon: TestTube,
    title: "Emulation & Performance Profiling",
    description: "Profile CPU/GPU and thermal behavior on a modern Snapdragon 8 Elite to evaluate app performance, battery drain, and thermal throttling under realistic loads."
  },
  {
    icon: GitBranch,
    title: "Multitasking / Split-Screen Coding Workflows",
    description: "Use the tablet as a secondary screen or for side-by-side code previews, documentation, and terminal windows while coding on a laptop."
  },
  {
    icon: Smartphone,
    title: "Hands-on OS / App Experimentation",
    description: "Sideload APKs, test alternative builds, and iterate quickly — Android's flexibility enables faster experimentation than closed ecosystems."
  },
  {
    icon: Cpu,
    title: "Mobile ML Testing",
    description: "Run small on-device ML models (TensorFlow Lite) to test inference latency and UX for mobile-first projects."
  },
  {
    icon: Presentation,
    title: "Presentation & Demo Device",
    description: "Use the tablet to demo projects, show live app flows to teammates/professors, or present portfolios in class with crisp visuals and good speakers."
  },
  {
    icon: Battery,
    title: "Long Dev Sessions & Battery Reliability",
    description: "Long battery life means uninterrupted coding, testing, and live demos without constantly searching for a charger."
  },
  {
    icon: Globe,
    title: "Accessory-Friendly Workflow",
    description: "USB-C, keyboard cases, and OTG support let you attach keyboards, external drives, or network adapters for heavier development tasks."
  }
];

const UseCases = () => {
  return (
    <section id="usecases" className="section-padding max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">How I'll Use It as a CS Student</h2>
      <p className="text-center text-muted-foreground mb-12">
        Technical use-cases for Computer Science Engineering workflow
      </p>

      <div>
        <div className="grid grid-cols-1 gap-6 mb-8">
          {studentUseCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:card-glow transition-all duration-300"
            >
              <div className="flex gap-4">
                <useCase.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">{useCase.title}</h4>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-6 bg-secondary border-border">
          <p className="italic text-sm">
            "As a Computer Science Engineering student, I need a device that's fast enough to test real workloads, 
            flexible enough to sideload and iterate CAED designs, and reliable enough to demo my projects — 
            the OnePlus Pad 3 covers those needs."
          </p>
        </Card>
      </div>
    </section>
  );
};

export default UseCases;
