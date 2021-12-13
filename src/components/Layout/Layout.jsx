import React from "react"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "assets/cart.svg"

// Components
import { Footer } from "./Footer"
import { Nav } from "./Nav"

// Context
import { CartContextProvider } from "context/cartContext"
import { ProductsContextProvider } from "context/productsContext"

// Layout
export const Layout = ({ children }) => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <div className="container mx-auto p-5 max-w-screen-xl flex flex-col justify-between min-h-screen">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Buy-it</title>
            <link rel="icon" href={titleIcon} />
            <link rel="canonical" href="#" />
            <link
              rel="shortcut icon"
              href="assets/cart.svg"
              type="image/x-icon"
            />
            <meta
              name="description"
              content="Ecommerce Application template, built using Gatsby, Stripe and Tailwindcss"
            />
          </Helmet>
          <Nav />
          {children}
          <Footer />
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  )
}
