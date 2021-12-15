import React, { useState, createContext } from "react"

export const CartStateContext = createContext(null)

// Layout
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartStateContext.Provider value={{ cart, setCart }}>
      {children}
    </CartStateContext.Provider>
  )
}
