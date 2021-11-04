import React, { useState } from "react"

// Components
import { Layout } from "../Layout/Layout"
import { CheckoutButton } from "../Cart/CheckoutButton"
import { ProductList } from "../Product/ProductList"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"

export const Home = () => {
  const [cart, setCart] = useState([])

  const cartItems = []
  const pricesList = []
  const sameItemsCount = {}

  // Create array of prices
  cart.map(item => {
    pricesList.push(item.priceId)
    return null
  })

  // Count no of same items
  pricesList.map(price => {
    sameItemsCount[price] = sameItemsCount[price]
      ? sameItemsCount[price] + 1
      : 1

    return null
  })

  // Prepare cart items
  Object.keys(sameItemsCount).map(key => {
    cartItems.push({ price: key, quantity: sameItemsCount[key] })
    return null
  })

  return (
    <>
      <Hero />
      <Newsletter />
    </>
  )
}
