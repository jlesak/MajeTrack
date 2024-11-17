import { getSession } from '@auth0/nextjs-auth0';
import { Investment } from '@/app/types'
import InvestmentDetailView from './InvestmentDetailView'

interface Props {
  params: {
    id: string
  }
}

export default async function InvestmentPage({ params }: Props) {
  const session = await getSession();

  // In a real app, fetch this data from your API
  const investment: Investment = {
    id: params.id,
    name: "mock investment",
    type: "Stock",
    value: 10000,
    growth: 5,
    transactions: [
      { type: "Buy", date: "2023-01-01", price: 100, amount: 100 },
      { type: "Sell", date: "2023-01-03", price: 200, amount: 70 },
    ],
  };


  return <InvestmentDetailView investment={investment} user={session!.user} />
} 