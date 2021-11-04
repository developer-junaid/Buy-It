import React from "react"

export const Footer = () => {
  return (
    <div
      className="
          border-t-2 border-gray-300
          flex
          md:flex-row
          flex-col
          md:justify-between
          text-center
          py-5
          text-sm
        "
    >
      <div className="mb-4">
        <a href="#" className="mx-2.5">
          About
        </a>
        <a href="#" className="mx-2.5">
          Privacy Policy
        </a>
        <a href="#" className="mx-2.5">
          Terms of Service
        </a>
      </div>
      <p>&copy; Copyright Reserved 2021</p>
    </div>
  )
}
