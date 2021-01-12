import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const GregPage = () => (
  <Layout>
    <SEO title="Greg's Page" />
    <h1>Hi from the second page which is Greg's, which is the 2nd</h1>
    <p>Welcome to page 2 of the 2 pages</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GregPage
