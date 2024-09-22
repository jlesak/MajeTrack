import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'

interface MonthlyIncomeCardProps {
  income: number;
}

export default function MonthlyIncomeCard({ income }: MonthlyIncomeCardProps) {
  const showAddIncome = false
  const newIncome = ''

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Monthly Income
          <Button variant="outline" size="sm" >
            <Plus className="h-4 w-4 mr-2" /> Add Income
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${income.toLocaleString()}</div>
        {showAddIncome && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-income">New Income Amount</Label>
              <Input
                id="new-income"
                type="number"
                value={newIncome}
                placeholder="Enter income amount"
              />
            </div>
            <Button>Add Income</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}