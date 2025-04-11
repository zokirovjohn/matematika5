"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FractionCalculator() {
  const [numerator1, setNumerator1] = useState(1)
  const [denominator1, setDenominator1] = useState(2)
  const [numerator2, setNumerator2] = useState(1)
  const [denominator2, setDenominator2] = useState(3)
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState({ numerator: 0, denominator: 1 })

  const calculateResult = () => {
    let resultNumerator = 0
    let resultDenominator = 1

    switch (operation) {
      case "+":
        resultNumerator = numerator1 * denominator2 + numerator2 * denominator1
        resultDenominator = denominator1 * denominator2
        break
      case "-":
        resultNumerator = numerator1 * denominator2 - numerator2 * denominator1
        resultDenominator = denominator1 * denominator2
        break
      case "*":
        resultNumerator = numerator1 * numerator2
        resultDenominator = denominator1 * denominator2
        break
      case "/":
        resultNumerator = numerator1 * denominator2
        resultDenominator = denominator1 * numerator2
        break
    }

    // Simplify the fraction
    const gcd = findGCD(Math.abs(resultNumerator), resultDenominator)
    setResult({
      numerator: resultNumerator / gcd,
      denominator: resultDenominator / gcd,
    })
  }

  // Find greatest common divisor using Euclidean algorithm
  const findGCD = (a: number, b: number): number => {
    return b === 0 ? a : findGCD(b, a % b)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Birinchi kasr</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numerator1">Surat</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(Number.parseInt(e.target.value) || 1)}
                min={1}
                max={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="denominator1">Maxraj</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(Number.parseInt(e.target.value) || 1)}
                min={1}
                max={100}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Ikkinchi kasr</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numerator2">Surat</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(Number.parseInt(e.target.value) || 1)}
                min={1}
                max={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="denominator2">Maxraj</Label>
              <Input
                id="denominator2"
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(Number.parseInt(e.target.value) || 1)}
                min={1}
                max={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Select value={operation} onValueChange={setOperation}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Amal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+">Qo&apos;shish (+)</SelectItem>
            <SelectItem value="-">Ayirish (-)</SelectItem>
            <SelectItem value="*">Ko&apos;paytirish (×)</SelectItem>
            <SelectItem value="/">Bo&apos;lish (÷)</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={calculateResult}>Hisoblash</Button>
      </div>

      <div className="p-6 border rounded-md">
        <h3 className="text-lg font-medium mb-4">Natija</h3>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold">
              <span className="block border-b-2 border-primary mb-1">{result.numerator}</span>
              <span>{result.denominator}</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              O&apos;nli ko&apos;rinishda: {(result.numerator / result.denominator).toFixed(3)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
