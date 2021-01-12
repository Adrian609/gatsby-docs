import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThomasPage = () => (
  <Layout>
    <SEO title="Thomas's Page" />
    <h1>Hi from Thomas's page</h1>
    <p>Welcome to Thomas's page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThomasPage