import { Link, usePage } from "@inertiajs/react"
import {
  AlertTriangle,
  BarChart3,
  Building2,
  ChevronLeft,
  FileCheck,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Risk Register", href: "/admin/risks", icon: AlertTriangle },
  { name: "Compliance", href: "/admin/compliance", icon: FileCheck },
  { name: "Vendors", href: "/admin/vendors", icon: Building2 },
  { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const { url } = usePage()
  const pathname = url

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-sidebar-border px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-4 h-4 text-sidebar-foreground/50 group-hover:text-sidebar-foreground transition-colors" />
              <div className="w-8 h-8 bg-sidebar-primary rounded-sm flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg tracking-tight text-sidebar-foreground">Sentinel</span>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex gap-x-3 rounded-lg p-3 text-sm font-medium leading-6 transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-5 w-5 shrink-0",
                          isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50"
                        )}
                      />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="border-t border-sidebar-border pt-4">
            <div className="flex items-center gap-3 px-2">
              <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center">
                <span className="text-sm font-medium text-sidebar-foreground">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                <p className="text-xs text-sidebar-foreground/50 truncate">Risk Manager</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
