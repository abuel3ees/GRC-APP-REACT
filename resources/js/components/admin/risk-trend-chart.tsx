import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: "Jul", critical: 24, high: 45, medium: 78, low: 120 },
  { month: "Aug", critical: 22, high: 48, medium: 82, low: 115 },
  { month: "Sep", critical: 28, high: 52, medium: 75, low: 108 },
  { month: "Oct", critical: 25, high: 49, medium: 80, low: 112 },
  { month: "Nov", critical: 20, high: 44, medium: 85, low: 118 },
  { month: "Dec", critical: 18, high: 42, medium: 88, low: 125 },
]

const COLORS = {
  critical: "#ef4444",
  high: "#f59e0b",
  medium: "#eab308",
  low: "#22c55e",
}

export function RiskTrendChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Risk Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-70">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.critical} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.critical} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.high} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.high} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.medium} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.medium} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.low} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.low} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend 
                iconType="circle" 
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
              />
              <Area 
                type="monotone" 
                dataKey="low" 
                stackId="1"
                stroke={COLORS.low} 
                fill="url(#colorLow)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="medium" 
                stackId="1"
                stroke={COLORS.medium} 
                fill="url(#colorMedium)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="high" 
                stackId="1"
                stroke={COLORS.high} 
                fill="url(#colorHigh)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="critical" 
                stackId="1"
                stroke={COLORS.critical} 
                fill="url(#colorCritical)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
