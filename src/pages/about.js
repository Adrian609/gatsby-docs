import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <header setTitle= "About Page"/>
    <h1>Hi from the about page</h1>
    <p>About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage