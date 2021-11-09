import * as React from "react";
import { StaticQuery, graphQL } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";

// styles
const codeStyles = {
  color: "#8A6534",
}

// data
const links = [
  {
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <div><h1>WELCOME TO THE SITE!!!!!!</h1></div>
      </Layout>
    </main>
  )
}

export default IndexPage
