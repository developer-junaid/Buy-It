import { Link } from "gatsby"
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
        <Link to="/about" className="mx-2.5">
          About
        </Link>
        <Link to="/privacy-policy" className="mx-2.5">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="mx-2.5">
          Terms of Service
        </Link>
      </div>
      <a
        href="https://developerjunaid.com/"
        className="text-gray-600 hover:text-purple-600 inline-block"
      >
        &copy; Developer: Junaid Qureshi | 2021
      </a>
    </div>
  )
}
