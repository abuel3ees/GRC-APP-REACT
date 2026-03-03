import { CTASection } from "@/components/ui/cta-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/ui/hero-section"
import { Navigation } from "@/components/ui/navigation"
import { StatsSection } from "@/components/ui/stats-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
