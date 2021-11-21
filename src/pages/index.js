import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './portfolio'
// import Seo from "../components/seo";
import '../index.scss';

const IndexPage = () => {
  return (
    <main className="bg-primary" >
      {/* <Seo title="Home" /> */}
      <PortfolioPage />
    </main>
  )
}

export default IndexPage
