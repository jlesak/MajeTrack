import Header from "../../components/Header";
import TotalValueCard from "./TotalValueCard";
import PortfolioChart from "./PortfolioChart";
import InvestmentsTable from "./InvestmentsTable";
import PortfolioAllocationChart from "./PortfolioAllocationChart";
import BankAccountsCard from "./BankAccountsCard";
import MonthlyIncomeCard from "./MonthlyIncomeCard";
import { BankAccount, Investment } from "../types/index";
import { Claims } from "@auth0/nextjs-auth0";
import PortfoliosTable from "@/components/portfolio/PortfoliosTable";

export default function PortfolioDashboard({ user }: Claims) {
  const investments = Array<Investment>(
    {
      id: "1",
      name: "Stock A",
      type: "Stock",
      value: 10000,
      growth: 5,
      transactions: [
        { type: "Buy", date: "2023-01-01", price: 100, amount: 100 },
        { type: "Sell", date: "2023-01-03", price: 200, amount: 70 },
      ],
    },
    { id: "2", name: "Bond B", type: "Bond", value: 15000, growth: 3, transactions: [] },
    {
      id: "3",
      name: "Real Estate C",
      type: "Real Estate",
      value: 25000,
      growth: 4,
      transactions: [],
    }
  );

  const bankAccounts = Array<BankAccount>(
    { name: "Checking Account", balance: 5000 },
    { name: "Savings Account", balance: 20000 }
  );

  const monthlyIncome = 5000;

  const portfolioValue = 123;
  const portfolioGrowth = 7.8;

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      <main className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-8">
          Investment Portfolio Dashboard
        </h2>
        <PortfolioChart />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TotalValueCard value={portfolioValue} growth={portfolioGrowth} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PortfoliosTable  />
          <PortfolioAllocationChart investments={investments} />
        </div>

        <div className="grid gap-6 mb-8">
          <InvestmentsTable investments={investments} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <BankAccountsCard accounts={bankAccounts}  />
          <MonthlyIncomeCard
            income={monthlyIncome}
          />
        </div>
      </main>
    </div>
  );
}
