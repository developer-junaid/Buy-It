import React, { useEffect, useState } from "react"

// Links
import { GET_PRODUCTS } from "../../constants/Permalinks"

// ProductList
export const ProductList = () => {
  const [products, setProducts] = useState([])

  // Redirect
  const getProducts = async () => {
    const response = await fetch(GET_PRODUCTS)
    const data = await response.json()
    setProducts(data.products.data)
  }

  useEffect(() => {
    getProducts()
    console.log(products)
  }, [])

  // Return
  return (
    <div>
      <h1 className="text-3xl text-center">Products</h1>

      <ul className="shadow-xl bg-gray-500 text-white w-2/3 mx-auto mt-4 p-5">
        {products.length &&
          products.map(product => {
            return (
              <>
                <li>Name: {product.name}</li>
                <li>Price: $10</li>
              </>
            )
          })}
      </ul>
    </div>
  )
}
