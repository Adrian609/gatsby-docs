import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StarWarsQuote from "../components/starwarsquote"


const StarWars = () => (
  <Layout>
    <SEO title="Star Wars Quote" />
    <h1>Star Wars Quote.</h1>
    <p>Here is your quote.</p>
    <StarWarsQuote /> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StarWars