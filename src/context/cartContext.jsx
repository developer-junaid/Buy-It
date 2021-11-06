import React, { useState, createContext, useEffect } from "react"

export const CartStateContext = createContext(null)

// Layout
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // console.log("cart ", cart)

  // Set or fetch cart
  useEffect(() => {
    // setCart(1)
    // Fetch Data and set it
  }, [])

  return (
    <CartStateContext.Provider value={{ cart, setCart }}>
      {children}
    </CartStateContext.Provider>
  )
}
