import React, { useContext } from "react"

// Gatsby
import { Link } from "gatsby"

// Context
import { CartStateContext } from "../../context/cartContext"

export const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartStateContext)

  // Cart
  const addToCart = product => {
    let isEmpty = cart.length === 0

    isEmpty ? setCart([product]) : setCart([...cart, product])
  }

  return (
    <div className="shadow-lg rounded-lg">
      <a href="#">
        <img src={product.image} alt={product.name} className="rounded-t-lg" />
      </a>
      <div className="p-5">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex my-3">
          <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
          <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
          <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
          <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
        </div>
        <div className="flex my-3">
          <div
            className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
          >
            S
          </div>
          <div
            className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
          >
            M
          </div>
          <div
            className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
          >
            L
          </div>
          <div
            className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
          >
            XL
          </div>
          <div
            className="
                border-2 border-gray-300
                text-gray-400
                rounded-md
                text-xs
                py-1
                px-2
                mr-2
              "
          >
            XXL
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between">
          <button
            className="
                bg-gradient-to-r
                from-red-600
                to-pink-500
                rounded-full
                py-2
                px-4
                my-2
                text-sm text-white
                hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600
                flex flex-row
                justify-center
              "
            onClick={() => {
              addToCart(product)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
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
            Add to cart
          </button>
          <Link
            className="
                bg-purple-600
                rounded-full
                py-2
                px-4
                my-2
                text-sm text-white
                hover:bg-purple-700
                flex flex-row
                justify-center
              "
            to={`product/${product.id}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
