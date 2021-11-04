import React, { useContext, useEffect, useState } from "react"

// Permalinks
import { GET_PRODUCTS } from "../../constants/Permalinks"

// Link
import { Link } from "gatsby"
import { CartStateContext } from "../../context/cartContext"

export const ProductList = ({ children, title, to }) => {
  const { cart, setCart } = useContext(CartStateContext)

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const allProductsResponse = await fetch(GET_PRODUCTS)
    const allProductsData = await allProductsResponse.json()
    setProducts(allProductsData.products)
  }

  const addToCart = product => {
    let isEmpty = cart.length === 0

    isEmpty ? setCart([product]) : setCart([...cart, product])
  }

  useEffect(() => {
    getProducts()
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
