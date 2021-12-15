import React, { useContext } from "react"

// Context
import { ProductsStateContext } from "context/productsContext"

// Components
import { ProductCard } from "components"

export const Products = () => {
  const { products } = useContext(ProductsStateContext)

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div>
          <div className="flex flex-col">
            <h2 className="text-3xl mb-6 border-l-4 border-blue-500 pl-4">
              Shoes
            </h2>
          </div>
          <div
            className="
          grid grid-flow-row grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-10
        "
          >
            {products &&
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
