import { ComplianceChart } from "@/components/admin/compliance-chart"
import { MetricsCards } from "@/components/admin/metrics-cards"
import { QuickActions } from "@/components/admin/quick-actions"
import { RecentAlerts } from "@/components/admin/recent-alerts"
import { RiskHeatMap } from "@/components/admin/risk-heat-map"
import { RiskTrendChart } from "@/components/admin/risk-trend-chart"
import { TopRisks } from "@/components/admin/top-risks"
import AdminLayout from "@/layouts/admin-layout"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Your risk overview at a glance</p>
        </div>

        {/* Metrics Cards */}
        <MetricsCards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risk Heat Map - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RiskHeatMap />
          </div>

          {/* Recent Alerts */}
          <div>
            <RecentAlerts />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <RiskTrendChart />
          <ComplianceChart />
        </div>

        {/* Top Risks Table */}
        <TopRisks />
      </div>
    </AdminLayout>
  )
}
