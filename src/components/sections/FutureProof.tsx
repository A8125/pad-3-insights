import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const performanceOverTime = [
  { year: 2025, "OnePlus Pad 3": 100, "iPad Air M2": 100, "iPad Pro 11 M2": 100 },
  { year: 2026, "OnePlus Pad 3": 92, "iPad Air M2": 94, "iPad Pro 11 M2": 96 },
  { year: 2027, "OnePlus Pad 3": 85, "iPad Air M2": 88, "iPad Pro 11 M2": 92 },
  { year: 2028, "OnePlus Pad 3": 78, "iPad Air M2": 82, "iPad Pro 11 M2": 88 }
];

const updateTimeline = [
  { device: "OnePlus Pad 3", years: 4, policy: "Android 15 + 4 OS updates" },
  { device: "iPad Air M2", years: 6, policy: "iPadOS support ~6 years" },
  { device: "iPad Pro 11 M2", years: 7, policy: "iPadOS support ~7 years" }
];

const displayLongevity = [
  {
    metric: "Refresh Rate",
    "OnePlus Pad 3": 100,
    "iPad Air M2": 40,
    "iPad Pro 11 M2": 80
  },
  {
    metric: "Resolution",
    "OnePlus Pad 3": 95,
    "iPad Air M2": 85,
    "iPad Pro 11 M2": 90
  },
  {
    metric: "Color Accuracy",
    "OnePlus Pad 3": 100,
    "iPad Air M2": 85,
    "iPad Pro 11 M2": 85
  },
  {
    metric: "HDR Support",
    "OnePlus Pad 3": 90,
    "iPad Air M2": 80,
    "iPad Pro 11 M2": 100
  },
  {
    metric: "Screen Durability",
    "OnePlus Pad 3": 85,
    "iPad Air M2": 90,
    "iPad Pro 11 M2": 95
  }
];

const FutureProof = () => {
  return (
    <section id="future" className="section-padding max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Future-Proof Analysis</h2>
      <p className="text-center text-muted-foreground mb-12">
        How each device holds up over the next 3-4 years
      </p>

      <div className="space-y-12">
        {/* Performance Over Time */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Performance Over Time (Projected)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Relative Performance (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Line type="monotone" dataKey="OnePlus Pad 3" stroke="hsl(var(--chart-1))" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="iPad Air M2" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="iPad Pro 11 M2" stroke="hsl(var(--chart-3))" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Projected performance degradation based on app requirements growth and historical SoC aging patterns
          </p>
        </Card>

        {/* Software Update Timeline */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Expected Software Update Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={updateTimeline} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" label={{ value: 'Years of Updates', position: 'insideBottom', offset: -5 }} />
              <YAxis type="category" dataKey="device" stroke="hsl(var(--muted-foreground))" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="years" fill="hsl(var(--chart-4))" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Based on manufacturer update policies and historical support timelines
          </p>
        </Card>

        {/* Display Technology Longevity */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Display Technology Relevance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={displayLongevity}>
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
            Display features that remain relevant as content standards evolve (high refresh rate, resolution, color depth)
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FutureProof;
