import React from "react"
import { Link } from "gatsby"
import Img from "../components/img"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ChrisPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Chris's Page</h1>
    <p>Welcome to page 2</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ChrisPage
