import React from "react"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "../../../static/cart.svg"

// Footer
// import Footer from "../Footer"

// Layout
export const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buy-it</title>
        <link rel="icon" href={titleIcon} />
        <link rel="canonical" href="#" />
        <link
          rel="shortcut icon"
          href="../../static/cart.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Ecommerce Application template, built using Gatsby, Stripe and Tailwindcss"
        />
      </Helmet>
      {children}
      {/* <Footer /> */}
    </>
  )
}
