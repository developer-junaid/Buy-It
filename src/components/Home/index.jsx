import React, { useState } from "react"

// Components
import { Layout } from "../../components/Layout"
import { CheckoutButton } from "../../components/Cart/CheckoutButton"
import { ProductList } from "../../components/Product/ProductList"

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
    <Layout>
      <div className="min-h-full flex flex-col bg-blue-50">
        <h1 className="text-3xl text-center">
          Products : Cart({cartItems.length})
        </h1>
        <ProductList setCart={setCart} cart={cart} />
        <CheckoutButton cartItems={cartItems} />
      </div>
    </Layout>
  )
}
