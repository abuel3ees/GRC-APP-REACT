import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpRight } from "lucide-react"

const risks = [
  {
    id: "RSK-001",
    title: "Cloud Infrastructure Misconfiguration",
    category: "IT Security",
    owner: "Sarah Chen",
    impact: "Critical",
    likelihood: "Likely",
    status: "Open",
  },
  {
    id: "RSK-002",
    title: "Third-party Data Breach Exposure",
    category: "Vendor Risk",
    owner: "Michael Torres",
    impact: "Major",
    likelihood: "Possible",
    status: "In Progress",
  },
  {
    id: "RSK-003",
    title: "Regulatory Compliance Gap",
    category: "Compliance",
    owner: "Emily Watson",
    impact: "Major",
    likelihood: "Likely",
    status: "Open",
  },
  {
    id: "RSK-004",
    title: "Business Continuity Plan Outdated",
    category: "Operations",
    owner: "David Kim",
    impact: "Moderate",
    likelihood: "Unlikely",
    status: "Under Review",
  },
  {
    id: "RSK-005",
    title: "Employee Security Awareness",
    category: "People",
    owner: "Lisa Park",
    impact: "Moderate",
    likelihood: "Possible",
    status: "In Progress",
  },
]

function getImpactBadge(impact: string) {
  switch (impact) {
    case "Critical":
      return <Badge variant="destructive" className="text-xs">{impact}</Badge>
    case "Major":
      return <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 text-xs">{impact}</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{impact}</Badge>
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "Open":
      return <Badge variant="outline" className="text-xs border-red-500/50 text-red-400">{status}</Badge>
    case "In Progress":
      return <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-400">{status}</Badge>
    case "Under Review":
      return <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">{status}</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{status}</Badge>
  }
}

export function TopRisks() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Top Risks</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            View all
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Risk</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Owner</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Impact</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {risks.map((risk) => (
                <tr key={risk.id} className="hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="text-sm font-mono text-muted-foreground">{risk.id}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-medium">{risk.title}</span>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <span className="text-sm text-muted-foreground">{risk.category}</span>
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    <span className="text-sm text-muted-foreground">{risk.owner}</span>
                  </td>
                  <td className="py-3 px-4">{getImpactBadge(risk.impact)}</td>
                  <td className="py-3 px-4">{getStatusBadge(risk.status)}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
