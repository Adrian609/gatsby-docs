import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JeffPage = () => (
  <Layout>
    <SEO title="Jeff's Page" />
    <h1>Hi from the Jeff's page</h1>
    <p>Welcome to Jeff's Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JeffPage
