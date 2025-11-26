import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const cpuData = [
  { device: "OnePlus Pad 3", score: 8500 },
  { device: "iPad Air M2", score: 9200 },
  { device: "iPad Pro 11 M2", score: 9400 }
];

const displayData = [
  {
    metric: "Resolution",
    "OnePlus Pad 3": 95,
    "iPad Air M2": 85,
    "iPad Pro 11 M2": 90
  },
  {
    metric: "Refresh Rate",
    "OnePlus Pad 3": 100,
    "iPad Air M2": 42,
    "iPad Pro 11 M2": 83
  },
  {
    metric: "Color Depth",
    "OnePlus Pad 3": 100,
    "iPad Air M2": 83,
    "iPad Pro 11 M2": 83
  },
  {
    metric: "Brightness",
    "OnePlus Pad 3": 90,
    "iPad Air M2": 80,
    "iPad Pro 11 M2": 100
  },
  {
    metric: "Screen Size",
    "OnePlus Pad 3": 95,
    "iPad Air M2": 80,
    "iPad Pro 11 M2": 85
  }
];

const speakerData = [
  { device: "OnePlus Pad 3", count: 8, config: "Quad × 2" },
  { device: "iPad Air M2", count: 4, config: "Stereo" },
  { device: "iPad Pro 11 M2", count: 4, config: "Stereo" }
];

const batteryData = [
  { device: "OnePlus Pad 3", video: 11, web: 9 },
  { device: "iPad Air M2", video: 10, web: 9 },
  { device: "iPad Pro 11 M2", video: 10, web: 9 }
];

const priceData = [
  { device: "OnePlus Pad 3", price: 45999 },
  { device: "iPad Air M2", price: 64900 },
  { device: "iPad Pro 11 M2", price: 81900 }
];

const DeviceComparison = () => {
  return (
    <section id="comparison" className="section-padding max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Device Comparison</h2>
      <p className="text-center text-muted-foreground mb-12">
        Data-driven comparison against iPad Air M2 and iPad Pro 11 M2
      </p>

      <div className="space-y-12">
        {/* CPU Performance */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">CPU Performance (Geekbench Multi-Core)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cpuData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Source: Geekbench 6 estimated scores based on Snapdragon 8 Elite benchmarks
          </p>
        </Card>

        {/* Display Comparison */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Display Quality Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={displayData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
              <Radar name="OnePlus Pad 3" dataKey="OnePlus Pad 3" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.5} />
              <Radar name="iPad Air M2" dataKey="iPad Air M2" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} />
              <Radar name="iPad Pro 11 M2" dataKey="iPad Pro 11 M2" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.3} />
              <Legend />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Normalized scores: Resolution (pixels), Refresh Rate (Hz), Color Depth (bits), Brightness (nits), Screen Size (inches)
          </p>
        </Card>

        {/* Speaker Configuration */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Speaker Configuration</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={speakerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="count" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            OnePlus Pad 3 features quad speakers on each side (8 total) vs stereo setup on iPads (4 total)
          </p>
        </Card>

        {/* Battery Runtime */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Estimated Battery Runtime (Hours)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={batteryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Bar dataKey="video" fill="hsl(var(--chart-3))" name="Video Playback" />
              <Bar dataKey="web" fill="hsl(var(--chart-4))" name="Web Browsing" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Source: Manufacturer specifications and independent battery tests
          </p>
        </Card>

        {/* Price Comparison */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Price Comparison (INR)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="price" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Base model pricing in India (256GB configuration where applicable)
          </p>
        </Card>
      </div>
    </section>
  );
};

export default DeviceComparison;
