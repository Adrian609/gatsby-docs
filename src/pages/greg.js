import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NewImage from "../components/newImage"

const GregPage = () => (
  <Layout>
    <SEO title="Greg's Page" />
    <h1>Hi from the second page which is Greg's, which is the 2nd</h1>
    <p>Welcome to page 2 of the 2 pages</p>
    <NewImage />
    <p>Second image</p>
    <hr></hr>
    <img src="https://source.unsplash.com/random" alt="" />
    <hr></hr>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GregPage
