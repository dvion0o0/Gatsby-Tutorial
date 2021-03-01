import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Button from "../Components/Button"
const ComponentName = ({
  data: {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <section>
        <Link to="/product">back</Link>
        <h1>Single Product</h1>
      </section>
      <section>
        <h1>{title}</h1>
        <Img fixed={fixed} alt={title} />
        <h2>{price}</h2>
        <p>{info}</p>
        <Button>Add to Cart</Button>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProducts(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
