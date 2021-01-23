import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import NewImage from "../components/newImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About Page</Link> <br />
    <Link to="/thomas/">Thomas's Page</Link> <br />
    <Link to="/starwars/">Get your Star Wars quote </Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/greg/">Go to Greg's page</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <Link to="/page-2">Go to page 2</Link> <br />
    <Link to="/jeff">Jeff Page</Link>
    <img src="https://source.unsplash.com/random" alt="" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <NewImage />
        </div>
  </Layout>
)

export default IndexPage
