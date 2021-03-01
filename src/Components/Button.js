import React from "react"
const Button = ({ children }) => {
  return (
    <button className="bg-red-900 py-4 px-12 text-pink-500 pointer">
      {children}
    </button>
  )
}

export default Button
