import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FetchApi from "../components/fetchApi"

const UserPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>User Page</h1>
    <p>User details</p>
    <div>
      <FetchApi />
    </div>
    <div>
      <FetchApi />
    </div>
    <div>
      <FetchApi />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserPage
