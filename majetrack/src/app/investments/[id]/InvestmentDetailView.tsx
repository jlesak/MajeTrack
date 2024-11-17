'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Investment } from '@/app/types'
import { Claims } from "@auth0/nextjs-auth0";
import Breadcrumbs from '@/components/Breadcrumbs'


interface Props {
  investment: Investment,
  user: Claims
}

export default function InvestmentDetailView({ investment, user }: Props) {
  const router = useRouter()
  const [newValue, setNewValue] = useState('')
  const [newValueDate, setNewValueDate] = useState('')
  const [newTransactionType, setNewTransactionType] = useState('Buy')
  const [newTransactionAmount, setNewTransactionAmount] = useState('')
  const [newTransactionPrice, setNewTransactionPrice] = useState('')

  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: investment.name, href: `/investments/${investment.id}` },
  ]

  // Mock historical data - replace with real data in production
  const historicalData = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: investment.value * (1 + Math.random() * 0.1 - 0.05)
  }))

  const handleUpdateValue = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement value update logic
    console.log('Update value:', { value: newValue, date: newValueDate })
  }

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement transaction creation logic
    console.log('New transaction:', {
      type: newTransactionType,
      amount: newTransactionAmount,
      price: newTransactionPrice
    })
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />
      <Header user={user} />
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">{investment.name} Details</h2>
        <Button variant="outline" onClick={() => router.back()}>
          Back to Dashboard
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${investment.value.toLocaleString()}</p>
            <p className={`text-lg ${investment.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {investment.growth}% growth
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Value History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Update Value</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateValue} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newValue">New Value</Label>
                  <Input
                    id="newValue"
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="Enter new value"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valueDate">Date</Label>
                  <Input
                    id="valueDate"
                    type="date"
                    value={newValueDate}
                    onChange={(e) => setNewValueDate(e.target.value)}
                  />
                </div>
                <Button type="submit">Update Value</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Transaction</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTransaction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="transactionType">Type</Label>
                  <select
                    id="transactionType"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={newTransactionType}
                    onChange={(e) => setNewTransactionType(e.target.value)}
                  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newTransactionAmount}
                    onChange={(e) => setNewTransactionAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newTransactionPrice}
                    onChange={(e) => setNewTransactionPrice(e.target.value)}
                    placeholder="Enter price"
                  />
                </div>
                <Button type="submit">Add Transaction</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investment.transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>${transaction.price}</TableCell>
                    <TableCell>${(transaction.amount * transaction.price).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 