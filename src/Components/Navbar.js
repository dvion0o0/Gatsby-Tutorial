import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <div style={{ display: "grid", fontSize: "18px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Products</Link>
    </div>
  )
}

export default Navbar
