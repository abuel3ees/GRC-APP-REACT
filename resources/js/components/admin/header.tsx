import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-6">
      <button className="lg:hidden p-2 -ml-2" aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>
      
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search risks, vendors, reports..."
            className="pl-10 bg-muted border-0 focus-visible:ring-accent"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  )
}
