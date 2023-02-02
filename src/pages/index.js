import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './portfolio'
import '../index.scss';

const IndexPage = () => {
  return (
    <main className="bg-primary" >
      <PortfolioPage />
    </main>
  )
}

export default IndexPage
