import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProducts: { nodes: products },
  } = data
  return (
    <Layout>
      <section>
        {products.map((item) => {
          return (
            <article key={item.id}>
              <Img fluid={item.image.fluid} />
              <h2>{item.title}</h2>
              <h2>{item.price}</h2>
              <Link to={`/products/${item.slug}`}>more info</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        price
        id
        slug
        title
        info {
          info
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
