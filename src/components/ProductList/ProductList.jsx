import React, { useEffect, useState } from "react"

// Permalinks
import { GET_PRODUCTS } from "../../constants/Permalinks"

export const ProductList = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const allProductsResponse = await fetch(GET_PRODUCTS)
    const allProductsData = await allProductsResponse.json()
    setProducts(allProductsData.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="bg-blue-50 h-screen">
      <h1 className="text-3xl text-center">Products</h1>

      <ul>
        {products.length &&
          products.map(product => {
            return (
              <div
                key={product.id}
                className="bg-white shadow-lg text-gray-800 flex flex-col justify-center w-2/3 mx-auto mt-4 p-5"
              >
                <img src={product.image} alt="" />
                <li>Name: {product.name}</li>
                <li>Price: ${product.price}</li>
                <li>Description: {product.description}</li>
                <button className="px-8 py-2 bg-blue-400 text-white mt-3 rounded-md">
                  Add to cart
                </button>
              </div>
            )
          })}
      </ul>
    </div>
  )
}
