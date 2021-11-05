import React, { useContext, useEffect, useState } from "react"

// Context
import { CartStateContext } from "../../context/cartContext"

// Gatsby
import { Link } from "gatsby"

// GraphQl
import { useStaticQuery, graphql } from "gatsby"

export const ProductList = ({ children, title, to }) => {
  const { cart, setCart } = useContext(CartStateContext)
  const [products, setProducts] = useState([])

  // Get Data
  let allData = useStaticQuery(
    graphql`
      query GetProductsPrices {
        prices: allStripePrice(
          filter: { active: { eq: true }, product: { active: { eq: true } } }
        ) {
          edges {
            node {
              id
              currency
              product {
                id
                description
                images
                name
              }
              unit_amount_decimal
            }
          }
        }
      }
    `
  )

  // Optimize Data
  allData = allData.prices.edges
  const productsData = []

  allData.map(({ node: price }) => {
    const product = price.product

    productsData.push({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: parseFloat(price.unit_amount_decimal) / 100,
      currency: price.currency,
      priceId: price.id,
    })
  })

  // Cart
  const addToCart = product => {
    let isEmpty = cart.length === 0

    isEmpty ? setCart([product]) : setCart([...cart, product])
  }

  useEffect(() => {
    setProducts(productsData)
    console.log("ProductList: products ", productsData)
  }, [])

  return (
    <div className="my-20">
      <div className="flex justify-between">
        <h2 className="text-3xl mb-6">{title}</h2>
        <Link to={to} className="text-xl flex">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
      <div
        className="
          grid grid-flow-row grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-10
        "
      >
        {children}
      </div>
    </div>
  )
}
