import { AlertTriangle, Shield, TrendingDown, TrendingUp, Clock, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  {
    title: "Total Risks",
    value: "247",
    change: "+12",
    trend: "up",
    icon: AlertTriangle,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Critical Risks",
    value: "18",
    change: "-3",
    trend: "down",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Compliance Score",
    value: "94%",
    change: "+2.4%",
    trend: "up",
    icon: FileCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Avg Resolution Time",
    value: "4.2d",
    change: "-0.8d",
    trend: "down",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{metric.title}</p>
                <p className="text-2xl font-semibold">{metric.value}</p>
                <div className="flex items-center gap-1 text-xs">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-green-500" />
                  )}
                  <span className="text-muted-foreground">{metric.change} this month</span>
                </div>
              </div>
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
