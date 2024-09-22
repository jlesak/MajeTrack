import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from 'lucide-react'

interface TotalValueCardProps {
  value: number;
  growth: number;
}

export default function TotalValueCard({ value, growth }: TotalValueCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">
          +{growth}% from last month
        </p>
      </CardContent>
    </Card>
  )
}