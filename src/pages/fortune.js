import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GetFortune from "../components/getfortune"

const FortunePage = () => (
  <Layout>
    <SEO title="Get Fortune" />
    <h1>Get your fortune.</h1>
    <p>Here is your fortune.</p>
    <GetFortune />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FortunePage