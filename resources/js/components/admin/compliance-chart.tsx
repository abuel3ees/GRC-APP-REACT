import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, PolarAngleAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "SOC 2", value: 98, fill: "#22c55e" },
  { name: "GDPR", value: 94, fill: "#3b82f6" },
  { name: "HIPAA", value: 89, fill: "#8b5cf6" },
  { name: "ISO 27001", value: 92, fill: "#f59e0b" },
]

export function ComplianceChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Compliance Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-70 relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="20%" 
              outerRadius="90%" 
              barSize={12} 
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis 
                type="number" 
                domain={[0, 100]} 
                angleAxisId={0} 
                tick={false}
              />
              <RadialBar
                background={{ fill: 'rgba(255,255,255,0.05)' }}
                dataKey="value"
                cornerRadius={6}
              />
              <Legend 
                iconSize={10} 
                layout="horizontal" 
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
                formatter={(value: string, entry: any) => (
                  <span style={{ color: '#888' }}>{value} ({entry.payload.value}%)</span>
                )}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center -mt-8">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-xs text-muted-foreground">Overall</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
