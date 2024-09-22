import { getSession } from '@auth0/nextjs-auth0';
import LandingPage from './dashboard/LandingPage'
import PortfolioDashboard from './dashboard/PortfolioDashboard'
 
export default async function Index() {
    const session = await getSession();

    if (session?.user) {
        return <PortfolioDashboard user={session.user} />;
      } else {
        return <LandingPage />;
      }
}