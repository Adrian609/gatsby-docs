import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnaPic from "../components/anapic"
import PuppyPic from "../components/puppyApi"

const AnaPage = () => (
  <Layout>
    <SEO title="Ana's Page" />
    <h1>Hi from Ana's page</h1>
    <p>Welcome to Ana's page</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <AnaPic />
      <PuppyPic />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AnaPage