import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";

// styles
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// data
const links = [
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
      </Layout>
    </main>
  )
}

export default IndexPage
