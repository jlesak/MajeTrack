'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'
import { BankAccount } from '../types/index'

interface BankAccountsCardProps {
  accounts: BankAccount[];
  setAccounts: React.Dispatch<React.SetStateAction<BankAccount[]>>;
}

export default function BankAccountsCard({ accounts, setAccounts }: BankAccountsCardProps) {
  const [showAddAccount, setShowAddAccount] = useState(false)
  const [newAccountName, setNewAccountName] = useState('')
  const [newAccountBalance, setNewAccountBalance] = useState('')

  const handleAddAccount = () => {
    if (newAccountName && newAccountBalance) {
      setAccounts([...accounts, { name: newAccountName, balance: parseFloat(newAccountBalance) }])
      setNewAccountName('')
      setNewAccountBalance('')
      setShowAddAccount(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Bank Accounts
          <Button variant="outline" size="sm" onClick={() => setShowAddAccount(true)}>
            <Plus className="h-4 w-4 mr-2" /> Add Account
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account Name</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account, index) => (
              <TableRow key={index}>
                <TableCell>{account.name}</TableCell>
                <TableCell>${account.balance.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {showAddAccount && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="account-name">Account Name</Label>
              <Input
                id="account-name"
                value={newAccountName}
                onChange={(e) => setNewAccountName(e.target.value)}
                placeholder="Enter account name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account-balance">Initial Balance</Label>
              <Input
                id="account-balance"
                type="number"
                value={newAccountBalance}
                onChange={(e) => setNewAccountBalance(e.target.value)}
                placeholder="Enter initial balance"
              />
            </div>
            <Button onClick={handleAddAccount}>Add Account</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}