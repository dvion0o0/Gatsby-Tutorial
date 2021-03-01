import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
const Header = () => {
  const queryData = useStaticQuery(getData)
  const {
    site: {
      info: {
        title,
        author,
        description,
        data,
        person: { name, age },
      },
    },
  } = queryData
  return (
    <>
      <h1>{author}</h1>
      <h2>{name}</h2>
      {data.map((item) => {
        return <h2>{item}</h2>
      })}
    </>
  )
}

export default Header
