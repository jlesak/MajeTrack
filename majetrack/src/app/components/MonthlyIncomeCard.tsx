'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'

interface MonthlyIncomeCardProps {
  income: number;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
}

export default function MonthlyIncomeCard({ income, setIncome }: MonthlyIncomeCardProps) {
  const [showAddIncome, setShowAddIncome] = useState(false)
  const [newIncome, setNewIncome] = useState('')

  const handleAddIncome = () => {
    if (newIncome) {
      setIncome(income + parseFloat(newIncome))
      setNewIncome('')
      setShowAddIncome(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Monthly Income
          <Button variant="outline" size="sm" onClick={() => setShowAddIncome(true)}>
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
                onChange={(e) => setNewIncome(e.target.value)}
                placeholder="Enter income amount"
              />
            </div>
            <Button onClick={handleAddIncome}>Add Income</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}