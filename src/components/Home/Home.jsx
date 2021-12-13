import React, { useEffect, useState } from "react"

// GraphQl
import { useStaticQuery, graphql } from "gatsby"

// Components
import { ProductList } from "components"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"
import { ProductCard } from "components"

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
                metadata {
                  tag
                }
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
      tag: product.metadata.tag,
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
