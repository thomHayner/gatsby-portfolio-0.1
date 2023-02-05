import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './portfolio'
import '../index.scss';

const IndexPage = () => {
  React.useEffect(()=> {
    if (typeof window !== 'undefined') {
      window.resizeTo(1366, 768);
    };
  }, [])

  return (
    <main className="bg-primary" >
      <PortfolioPage />
    </main>
  )
}

export default IndexPage
