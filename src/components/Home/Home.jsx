import React, { useState } from "react"

// Components
import { Layout } from "../Layout/Layout"
import { CheckoutButton } from "../Cart/CheckoutButton"
import { ProductList } from "../Product/ProductList"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"
import { ProductCard } from "../Product/ProductCard"

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

  console.log("Cart Items : ", cartItems)
  return (
    <>
      <Hero />
      <section id="shop">
        <ProductList title="Men's Collection" to="category/men">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>

        <ProductList title="Women's Collection" to="category/women">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>
      </section>

      <Newsletter />
    </>
  )
}
