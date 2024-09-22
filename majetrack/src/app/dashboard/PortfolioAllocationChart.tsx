'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { PieChart as PieChartIcon } from 'lucide-react'
import { Investment } from '../types/index'

interface PortfolioAllocationProps {
  investments: Investment[]
}

const PortfolioAllocation: React.FC<PortfolioAllocationProps> = ({ investments }) => {
  const COLORS = [
    'hsl(var(--primary))',
    'hsl(var(--secondary))',
    'hsl(var(--accent))',
    'hsl(var(--muted))',
    'hsl(var(--card))',
    'hsl(var(--destructive))',
    'hsl(var(--warning))',
  ]

  const investmentTypes = Array.from(new Set(investments.map(inv => inv.type)))

  const aggregatedData = investmentTypes.map(type => ({
    name: type,
    value: investments.filter(inv => inv.type === type).reduce((sum, inv) => sum + inv.value, 0)
  }))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Portfolio Allocation</CardTitle>
        <PieChartIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={aggregatedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {aggregatedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default PortfolioAllocation