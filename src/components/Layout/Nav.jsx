import React, { useContext } from "react"

// Context
import { CartStateContext } from "context/cartContext"

// Gatsby
import { Link } from "gatsby"

export const Nav = () => {
  // Context
  const { cart } = useContext(CartStateContext)

  // Return
  return (
    <div className="md:flex md:flex-row md:justify-between items-center text-center">
      <div className="flex justify-center mb-5 md:mb-0">
        <div
          className="
              bg-gradient-to-r
              from-gray-800
              to-blue-300
              w-10
              h-10
              rounded-lg
            "
        ></div>
        <Link to="/" className="text-3xl text-gray-600 ml-2">
          Buy-it
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 p-4"
          activeStyle={{ color: "blue" }}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-gray-600 hover:text-blue-600 p-4"
          activeStyle={{ color: "blue" }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="
              
          text-gray-600 hover:text-blue-600 p-4
            "
          activeStyle={{ color: "blue" }}
        >
          <span className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full">
              {cart.length}
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}
