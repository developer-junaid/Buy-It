import React, { useContext } from "react"

// Context
import { CartStateContext } from "../../context/cartContext"

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
              from-purple-400
              to-red-600
              w-10
              h-10
              rounded-lg
            "
        ></div>
        <h1 className="text-3xl text-gray-600 ml-2">Daraz</h1>
      </div>
      <div>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
          Shop
        </a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
          Blog
        </a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
          Contact
        </a>
        <a
          href="#"
          className="
              bg-purple-600
              text-gray-50
              hover:bg-purple-700
              p-3
              rounded-full
              px-5
            "
        >
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
          Cart ({cart})
        </a>
      </div>
    </div>
  )
}
