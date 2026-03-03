import { AlertCircle, AlertTriangle, Info } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const alerts = [
  {
    id: 1,
    title: "Critical vulnerability detected",
    description: "AWS S3 bucket misconfiguration",
    severity: "critical",
    time: "2m ago",
  },
  {
    id: 2,
    title: "Compliance deadline approaching",
    description: "SOC 2 audit due in 5 days",
    severity: "warning",
    time: "15m ago",
  },
  {
    id: 3,
    title: "New vendor risk assessment",
    description: "Acme Corp requires review",
    severity: "info",
    time: "1h ago",
  },
  {
    id: 4,
    title: "Policy update required",
    description: "Data retention policy outdated",
    severity: "warning",
    time: "2h ago",
  },
  {
    id: 5,
    title: "Access review reminder",
    description: "Q1 access review pending",
    severity: "info",
    time: "3h ago",
  },
]

function getSeverityIcon(severity: string) {
  switch (severity) {
    case "critical":
      return <AlertTriangle className="w-4 h-4 text-red-500" />
    case "warning":
      return <AlertCircle className="w-4 h-4 text-amber-500" />
    default:
      return <Info className="w-4 h-4 text-blue-500" />
  }
}

function getSeverityBadge(severity: string) {
  switch (severity) {
    case "critical":
      return <Badge variant="destructive" className="text-[10px] px-1.5 py-0">Critical</Badge>
    case "warning":
      return <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 text-[10px] px-1.5 py-0">Warning</Badge>
    default:
      return <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Info</Badge>
  }
}

export function RecentAlerts() {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
          <Badge variant="outline" className="text-xs">{alerts.length} new</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
          >
            <div className="mt-0.5">{getSeverityIcon(alert.severity)}</div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium truncate">{alert.title}</p>
                {getSeverityBadge(alert.severity)}
              </div>
              <p className="text-xs text-muted-foreground truncate">{alert.description}</p>
              <p className="text-xs text-muted-foreground/70">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
