import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from "recharts";

const valueIndex = [
  { device: "OnePlus Pad 3", score: 8.9 },
  { device: "iPad Air M2", score: 6.2 },
  { device: "iPad Pro 11 M2", score: 5.8 }
];

const totalCost = [
  { device: "OnePlus Pad 3", device_cost: 549, accessories: 80, depreciation: 150 },
  { device: "iPad Air M2", device_cost: 799, accessories: 150, depreciation: 200 },
  { device: "iPad Pro 11 M2", device_cost: 999, accessories: 200, depreciation: 250 }
];

const costVsCapability = [
  { x: 549, y: 89, z: 100, device: "OnePlus Pad 3" },
  { x: 799, y: 85, z: 100, device: "iPad Air M2" },
  { x: 999, y: 92, z: 100, device: "iPad Pro 11 M2" }
];

const ValueBreakdown = () => {
  return (
    <section id="value" className="section-padding max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Value Breakdown</h2>
      <p className="text-center text-muted-foreground mb-12">
        Performance per dollar spent — the numbers that matter
      </p>

      <div className="space-y-12">
        {/* Value Index */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Value Index Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={valueIndex}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, 10]} />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Formula: (Performance + Display + Battery + Audio) / Price × 1000. Higher is better.
          </p>
        </Card>

        {/* 3-Year Total Cost */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">3-Year Total Cost of Ownership (USD)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={totalCost}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="device" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Bar dataKey="device_cost" stackId="a" fill="hsl(var(--chart-1))" name="Device Cost" />
              <Bar dataKey="accessories" stackId="a" fill="hsl(var(--chart-2))" name="Accessories" />
              <Bar dataKey="depreciation" stackId="a" fill="hsl(var(--chart-3))" name="Depreciation" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Includes device cost, typical accessories (case, stylus/pencil, keyboard), and estimated 3-year depreciation
          </p>
        </Card>

        {/* Cost vs Capability Scatter */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6">Cost vs Overall Capability</h3>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="Price" 
                unit="$" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Price (USD)', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Capability" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Capability Score', angle: -90, position: 'insideLeft' }}
              />
              <ZAxis type="number" dataKey="z" range={[400, 400]} />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card border border-border p-3 rounded">
                        <p className="font-bold">{payload[0].payload.device}</p>
                        <p className="text-sm">Price: ${payload[0].value}</p>
                        <p className="text-sm">Capability: {payload[1].value}/100</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter name="OnePlus Pad 3" data={[costVsCapability[0]]} fill="hsl(var(--chart-1))" />
              <Scatter name="iPad Air M2" data={[costVsCapability[1]]} fill="hsl(var(--chart-2))" />
              <Scatter name="iPad Pro 11 M2" data={[costVsCapability[2]]} fill="hsl(var(--chart-3))" />
              <Legend />
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Lower-left is better value (high capability at low cost). Capability is weighted average of performance, display, battery, and features.
          </p>
        </Card>

        {/* Summary Card */}
        <Card className="p-8 bg-card border-border card-glow">
          <h3 className="text-2xl font-bold mb-4">Value Summary</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="text-primary font-bold">$250 less</span> than iPad Air M2 with comparable performance
            </p>
            <p>
              <span className="text-primary font-bold">$450 less</span> than iPad Pro 11 M2 with practical feature parity
            </p>
            <p>
              <span className="text-primary font-bold">8.9/10</span> value index — highest among compared devices
            </p>
            <p>
              <span className="text-primary font-bold">$779 total</span> 3-year ownership cost vs $1,149 (iPad Air) and $1,449 (iPad Pro)
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ValueBreakdown;
