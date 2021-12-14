import React, { useState, useContext, useEffect } from "react"

// Sweetalerts
import Swal from "sweetalert2"

// Components
import { SizeSection } from "components/SizeSection/SizeSection"
import { Reviews } from "components/Reviews/Reviews"
import { ProductDescription } from "components/ProductDescription/ProductDescription"

// Context
import { CartStateContext } from "context/cartContext"
import { AddToCartIcon, RemoveFromCartIcon } from "utils/Icons"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const ProductInfo = ({ product, price }) => {
  const { name, description } = product

  const { cart, setCart } = useContext(CartStateContext)
  const [added, setAdded] = useState(false)

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

  useEffect(() => {
    // Check if already added in cart or not
    const filteredArray = cart.filter(item => item.id === product.id)

    if (filteredArray[0]) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }, [])

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

  const sizes = [
    { name: 40, inStock: false },
    { name: 41, inStock: true },
    { name: 42, inStock: true },
    { name: 43, inStock: true },
    { name: 44, inStock: true },
    { name: 45, inStock: true },
    { name: 46, inStock: false },
  ]

  const highlights = [
    "Higher, Softer, Wider",
    "More Bounce With Every Ounce",
    "Stability Evolved",
    "Created With Data",
  ]

  const reviews = { href: "#", average: 4, totalCount: 117 }

  return (
    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>
      </div>

      {/* Options */}
      <div className="mt-4 lg:mt-0 lg:row-span-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl text-gray-900">${(price / 100).toFixed(2)}</p>

        {/* Reviews */}
        <Reviews reviews={reviews} classNames={classNames} />

        <div className="mt-10">
          <SizeSection sizes={sizes} classNames={classNames} />

          <button
            onClick={() => {
              if (added) {
                removeFromCart(product)
              } else {
                addToCart(product)
              }
            }}
            className="mt-10 w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {added ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            {added ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>

      <ProductDescription description={description} highlights={highlights} />
    </div>
  )
}
