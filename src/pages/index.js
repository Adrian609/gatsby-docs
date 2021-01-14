import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/userPage/">User Page</Link> <br />
    <Link to="/thomas/">Thomas's Page</Link> <br />
    <Link to="/greg/">Go to Greg's page</Link> <br />
    <Link to="/jeff">Jeff Page</Link> <br />
    <Link to="/ana/">Ana's Page</Link> <br />
    <Link to="/about/">About Page</Link> <br />
  </Layout>
)

export default IndexPage
