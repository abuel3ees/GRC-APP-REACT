"use client"

import { Plus, FileText, UserPlus, AlertCircle, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { label: "New Risk", icon: Plus, variant: "default" as const },
  { label: "Run Assessment", icon: RefreshCw, variant: "outline" as const },
  { label: "Generate Report", icon: FileText, variant: "outline" as const },
  { label: "Add Vendor", icon: UserPlus, variant: "outline" as const },
  { label: "Log Incident", icon: AlertCircle, variant: "outline" as const },
  { label: "Export Data", icon: Download, variant: "outline" as const },
]

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          size="sm"
          className={action.variant === "default" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
        >
          <action.icon className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  )
}
