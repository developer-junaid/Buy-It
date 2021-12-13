import React, { useContext, useEffect, useState } from "react"

// Gatsby
import { Link } from "gatsby"

// Context
import { CartStateContext } from "context/cartContext"

// Components
import { SizeCard } from "./SizeCard/SizeCard"

// Sweetalerts
import Swal from "sweetalert2"

// Utils
import { AddToCartIcon, ArrowIcon, RemoveFromCartIcon } from "utils/Icons"

export const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartStateContext)
  const [added, setAdded] = useState(false)

  const sizes = [40, 41, 42, 43, 44, 45]

  // Cart
  const addToCart = product => {
    let isEmpty = cart.length === 0

    if (isEmpty) {
      setCart([{ ...product, quantity: 1 }])
      setAdded(true)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
      setAdded(true)
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const removeFromCart = product => {
    const filteredArray = cart.filter(item => item.id !== product.id)
    setCart(filteredArray)
    setAdded(false)

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product removed from cart",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  useEffect(() => {
    // Check if already added in cart or not
    const filteredArray = cart.filter(item => item.id === product.id)

    if (filteredArray[0]) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }, [])

  return (
    <div className="shadow-lg rounded-lg">
      <div
        className="h-3/5 bg-cover md:bg-cover bg-center  bg-no-repeat rounded-t-lg"
        style={{ backgroundImage: `url(${product.image})`, minHeight: "290px" }}
      ></div>

      <div className="p-4 h-2/5">
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <h3 className="font-medium text-gray-600">${product.price}</h3>
        </div>

        <div className="flex my-3">
          {sizes.map(size => (
            <SizeCard key={size} number={size} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <button
            className="
                bg-gradient-to-r
                from-blue-400
                to-gray-800
                rounded-full
                py-2
                2xl:px-4
                sm:px-10
                my-2
                text-sm text-white
                flex flex-row
                relative
                overflow-hidden
                group
                justify-center
              "
            onClick={() => {
              if (added) {
                removeFromCart(product)
              } else {
                addToCart(product)
              }
            }}
          >
            <span className="absolute w-64 h-40 mt-12 lg:group-hover:-rotate-45 lg:group-hover:-mt-24 transition-all ease-linear duration-500 bg-gray-800 left-0 top-0"></span>

            <span className="relative flex">
              {added ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              <span className="visible lg:hidden">
                {added ? "Remove from cart" : "Add to cart"}
              </span>
            </span>
          </button>

          <Link
            className="bg-gray-700 rounded-full py-2 px-4 my-2 group relative text-sm text-white overflow-hidden  flex flex-row justify-center"
            to={`/product/${product.id}`}
          >
            <span className="absolute w-64 h-40 mt-12 lg:group-hover:-rotate-45 lg:group-hover:-mt-24 transition-all ease-linear duration-500 bg-gray-800 left-0 top-0"></span>

            <span className="relative flex">
              <ArrowIcon />
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
