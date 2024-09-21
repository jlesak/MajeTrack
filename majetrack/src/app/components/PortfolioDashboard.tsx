'use client'

import React, { useState } from 'react'
import Header from './Header'
import TotalValueCard from './TotalValueCard'
import PortfolioChart from './PortfolioChart'
import InvestmentsTable from './InvestmentsTable'
import PortfolioAllocationChart from './PortfolioAllocationChart'
import BankAccountsCard from './BankAccountsCard'
import MonthlyIncomeCard from './MonthlyIncomeCard'
import { Investment } from '../types/index'

export default function PortfolioDashboard() {
    const [investments, setInvestments] = useState<Investment[]>([
        { name: 'Stock A', type: 'Stock', value: 10000, growth: 5, transactions: 
          [{type: 'Buy', date: '2023-01-01', price: 100, amount: 100},
            {type: 'Sell', date: '2023-01-03', price: 200, amount: 70},
          ] },
        { name: 'Bond B', type: 'Bond', value: 15000, growth: 3, transactions: [] },
        { name: 'Real Estate C', type: 'Real Estate', value: 25000, growth: 4, transactions: [] },
      ])
  const [bankAccounts, setBankAccounts] = useState([
    { name: 'Checking Account', balance: 5000 },
    { name: 'Savings Account', balance: 20000 },
  ])
  const [monthlyIncome, setMonthlyIncome] = useState(5000)

  const portfolioValue = 525000
  const portfolioGrowth = 7.8

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-8">Investment Portfolio Dashboard</h2>
        
        <PortfolioChart />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TotalValueCard value={portfolioValue} growth={portfolioGrowth} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InvestmentsTable investments={investments} />
          <PortfolioAllocationChart investments={investments} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <BankAccountsCard accounts={bankAccounts} setAccounts={setBankAccounts} />
          <MonthlyIncomeCard income={monthlyIncome} setIncome={setMonthlyIncome} />
        </div>
      </main>
    </div>
  )
}