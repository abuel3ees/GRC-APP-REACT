"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const impactLevels = ["Catastrophic", "Major", "Moderate", "Minor", "Negligible"]
const likelihoodLevels = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"]

// Risk data: [impact][likelihood] = count
const riskData = [
  [0, 1, 2, 1, 0],  // Catastrophic
  [1, 3, 5, 2, 1],  // Major
  [2, 8, 12, 6, 3], // Moderate
  [4, 10, 15, 8, 4], // Minor
  [3, 6, 8, 5, 2],  // Negligible
]

function getRiskColor(impact: number, likelihood: number): string {
  // Calculate risk score (higher = more risky)
  const riskScore = (4 - impact) + likelihood
  
  if (riskScore >= 6) return "bg-red-500"
  if (riskScore >= 4) return "bg-amber-500"
  if (riskScore >= 2) return "bg-yellow-500"
  return "bg-green-500"
}

function getRiskOpacity(count: number): number {
  if (count === 0) return 0.2
  if (count <= 2) return 0.5
  if (count <= 5) return 0.7
  if (count <= 10) return 0.85
  return 1
}

export function RiskHeatMap() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Risk Heat Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          {/* Y-axis label */}
          <div className="flex flex-col justify-center">
            <span className="text-xs text-muted-foreground -rotate-90 whitespace-nowrap origin-center translate-y-12">
              Impact Level
            </span>
          </div>
          
          <div className="flex-1 space-y-2">
            {/* Grid */}
            <div className="grid gap-1">
              {impactLevels.map((impact, impactIndex) => (
                <div key={impact} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-20 text-right truncate">{impact}</span>
                  <div className="flex-1 grid grid-cols-5 gap-1">
                    {likelihoodLevels.map((_, likelihoodIndex) => {
                      const count = riskData[impactIndex][likelihoodIndex]
                      const colorClass = getRiskColor(impactIndex, likelihoodIndex)
                      const opacity = getRiskOpacity(count)
                      return (
                        <div
                          key={likelihoodIndex}
                          className={`aspect-square rounded-md ${colorClass} flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-ring transition-all`}
                          style={{ opacity }}
                          title={`${impact} impact, ${likelihoodLevels[likelihoodIndex]} likelihood: ${count} risks`}
                        >
                          <span className="text-xs font-medium text-white drop-shadow-sm">
                            {count > 0 ? count : ""}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-20" />
              <div className="flex-1 grid grid-cols-5 gap-1">
                {likelihoodLevels.map((level) => (
                  <span key={level} className="text-xs text-muted-foreground text-center truncate">
                    {level}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-center pt-1">Likelihood</div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span className="text-xs text-muted-foreground">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <span className="text-xs text-muted-foreground">High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-yellow-500" />
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span className="text-xs text-muted-foreground">Low</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
