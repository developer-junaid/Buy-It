import React, { useEffect, useState } from "react"

// GraphQl
import { useStaticQuery, graphql } from "gatsby"

// Components
import { ProductList } from "../Product/ProductList"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"
import { ProductCard } from "../Product/ProductCard"

export const Home = () => {
  const [products, setProducts] = useState([])

  // Get Data
  let allData = useStaticQuery(
    graphql`
      query GetProductsPrices {
        prices: allStripePrice(
          filter: { active: { eq: true }, product: { active: { eq: true } } }
        ) {
          edges {
            node {
              id
              currency
              product {
                id
                description
                images
                name
              }
              unit_amount_decimal
            }
          }
        }
      }
    `
  )

  // Optimize Data
  allData = allData.prices.edges
  const productsData = []

  allData.map(({ node: price }) => {
    const product = price.product

    productsData.push({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: parseFloat(price.unit_amount_decimal) / 100,
      currency: price.currency,
      priceId: price.id,
    })

    return null
  })

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <>
      <Hero />
      <section id="shop">
        <ProductList title="Men's Collection" to="category/men">
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductList>

        <ProductList title="Women's Collection" to="category/women">
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductList>
      </section>

      <Newsletter />
    </>
  )
}
