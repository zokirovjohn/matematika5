"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"

interface FractionVisualizerProps {
  initialNumerator?: number
  initialDenominator?: number
  onChange?: (numerator: number, denominator: number) => void
}

export default function FractionVisualizer({
  initialNumerator = 1,
  initialDenominator = 2,
  onChange,
}: FractionVisualizerProps) {
  const [numerator, setNumerator] = useState(initialNumerator)
  const [denominator, setDenominator] = useState(initialDenominator)

  useEffect(() => {
    if (onChange) {
      onChange(numerator, denominator)
    }
  }, [numerator, denominator, onChange])

  const handleNumeratorChange = (value: number[]) => {
    setNumerator(value[0])
  }

  const handleDenominatorChange = (value: number[]) => {
    setDenominator(value[0])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold">
            <span className="block border-b-2 border-primary mb-1">{numerator}</span>
            <span>{denominator}</span>
          </div>
          <p className="mt-2 text-muted-foreground">
            O&apos;nli ko&apos;rinishda: {(numerator / denominator).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Surat: {numerator}</span>
          </div>
          <Slider value={[numerator]} min={1} max={12} step={1} onValueChange={handleNumeratorChange} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Maxraj: {denominator}</span>
          </div>
          <Slider value={[denominator]} min={2} max={12} step={1} onValueChange={handleDenominatorChange} />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-40 h-40 relative">
          <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden">
            <div
              className="absolute bg-primary/60"
              style={{
                width: "100%",
                height: "100%",
                clipPath: `polygon(50% 50%, 50% 0, ${numerator / denominator <= 0.25 ? 50 + 50 * Math.sin((2 * Math.PI * numerator) / denominator) : 100}% ${numerator / denominator <= 0.25 ? 50 - 50 * Math.cos((2 * Math.PI * numerator) / denominator) : 0}%, ${numerator / denominator > 0.5 ? 0 : 100}% ${numerator / denominator > 0.5 ? 0 : 100}%, ${numerator / denominator > 0.75 ? 0 : 50 - 50 * Math.sin((2 * Math.PI * numerator) / denominator)}% ${numerator / denominator > 0.75 ? 50 : 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
