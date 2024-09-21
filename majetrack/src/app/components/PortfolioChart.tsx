'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface HistoricalData {
  date: string;
  value: number;
}

export default function PortfolioChart() {
  const generateHistoricalData = (): HistoricalData[] => {
    // Random data for the past 6 months
    const now = new Date()
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1)
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1)

    const historicalData: HistoricalData[] = []
    while (startDate <= endDate) {
      const date = startDate.toISOString().split('T')[0]
      const value = Math.random() * 10000
      historicalData.push({ date, value })
      startDate.setDate(startDate.getDate() + 1)
    }
    return historicalData
  }

  const historicalData = generateHistoricalData()

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Total Portfolio Value (Past 6 Months)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}