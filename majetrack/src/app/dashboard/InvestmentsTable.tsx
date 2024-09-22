'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import InvestmentDetails from './InvestmentDetails'
import { getBadgeColor } from '../../lib/utils'
import { Investment } from '../types/index'

interface InvestmentsTableProps {
  investments: Investment[];
}

export default function InvestmentsTable({ investments }: InvestmentsTableProps) {
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null)

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Investments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Growth</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.name}>
                <TableCell className="font-medium">{investment.name}</TableCell>
                <TableCell>
                  <Badge className={`${getBadgeColor(investment.type)} text-primary`}>
                    {investment.type}
                  </Badge>
                </TableCell>
                <TableCell>${investment.value.toLocaleString()}</TableCell>
                <TableCell className={investment.growth >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {investment.growth}%
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => setSelectedInvestment(investment)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {selectedInvestment && (
          <InvestmentDetails investment={selectedInvestment} onClose={() => setSelectedInvestment(null)} />
        )}
      </CardContent>
    </Card>
  )
}