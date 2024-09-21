import { getSession } from '@auth0/nextjs-auth0';
import LandingPage from '../components/LandingPage'
import PortfolioDashboard from '../components/PortfolioDashboard'
 
export default async function Index() {
    const session = await getSession();

    if (session?.user) {
        return <PortfolioDashboard />;
      } else {
        return <LandingPage />;
      }
}