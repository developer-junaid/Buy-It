import React, { useContext } from "react"

// Gatsby
import { Link } from "gatsby"

// Context
import { CartStateContext } from "../../context/cartContext"

// Components
import { SizeCard } from "./SizeCard/SizeCard"

// Utils
import { countProducts } from "../../utils/countProducts"

export const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartStateContext)
  const sizes = [40, 41, 42, 43, 44, 45]

  // Cart
  const addToCart = product => {
    let isEmpty = cart.length === 0

    if (isEmpty) {
      setCart([{ ...product, quantity: 1 }])
    } else {
      const countedProducts = countProducts(cart)
      const count = countedProducts.filter(item => item.id === product.id)

      if (count.length === 0) {
        setCart([...cart, { ...product, quantity: 1 }])
      } else {
        const indexOfProduct = cart.findIndex(prod => prod.id === product.id)
        const updatedProduct = Object.assign({}, cart[indexOfProduct], {
          quantity: cart[indexOfProduct].quantity + 1,
        })

        setCart([
          ...cart.slice(0, indexOfProduct),
          updatedProduct,
          ...cart.slice(indexOfProduct + 1),
        ])
      }
    }
  }

  return (
    <div className="shadow-lg rounded-lg">
      <div
        className="h-3/5 bg-cover md:bg-cover bg-center  bg-no-repeat rounded-t-lg"
        style={{ backgroundImage: `url(${product.image})`, minHeight: "290px" }}
      ></div>

      <div className="p-4 h-2/5">
        <h3 className="font-medium">{product.name}</h3>

        <div className="flex my-3">
          {sizes.map(size => (
            <SizeCard key={size} number={size} />
          ))}
        </div>
        <div className="flex flex-col xl:flex-row justify-between">
          <button
            className="
                bg-gradient-to-r
                from-blue-400
                to-gray-800
                rounded-full
                py-2
                px-4
                my-2
                text-sm text-white
               hover:from-gray-800 hover:to-gray-800
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
          </button>
          <Link
            className="
                bg-gray-700
                rounded-full
                py-2
                px-4
                my-2
                text-sm text-white
                hover:bg-gray-800
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
