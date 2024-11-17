"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useState, useEffect } from "react";
import {
  Portfolio,
  getPortfolios,
} from "@/app/portfolios/actions";
import AddPortfolioForm from "./AddPortfolioForm";

export default function PortfoliosTable() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  

  const fetchPortfolios = () => {
    getPortfolios()
      .then((response) => {
        setPortfolios(response);
      });
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);



  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Portfolios
          <AddPortfolioForm fetchPortfolios={fetchPortfolios}/>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Invested</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Total profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolios.map((portfolio) => (
              <TableRow key={portfolio.name}>
                <TableCell className="font-medium">{portfolio.name}</TableCell>
                <TableCell className="font-medium">{portfolio.type}</TableCell>
                <TableCell>
                  {portfolio.investedAmount.toLocaleString()}
                </TableCell>
                <TableCell>{portfolio.valueNow.toLocaleString()}</TableCell>
                <TableCell
                  className={
                    portfolio.totalProfit >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {portfolio.totalProfit < 0
                    ? -portfolio.totalProfit
                    : portfolio.totalProfit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
