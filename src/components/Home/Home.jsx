import React, { useContext } from "react"

// Components
import { ProductList } from "components"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"
import { ProductCard } from "components"
import { ProductsStateContext } from "context/productsContext"

export const Home = () => {
  const { products } = useContext(ProductsStateContext)

  return (
    <>
      <Hero />
      <section id="shop">
        <ProductList title="Trending Collection">
          {products &&
            products.map(product => {
              if (product.tag === "trending") {
                return <ProductCard key={product.id} product={product} />
              }
              return null
            })}
        </ProductList>

        <ProductList title="Best Sellers">
          {products &&
            products.map(product => {
              if (product?.tag === "best-seller") {
                return <ProductCard key={product.id} product={product} />
              }
              return null
            })}
        </ProductList>
      </section>

      <Newsletter />
    </>
  )
}
