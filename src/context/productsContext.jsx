import React, { useState, createContext, useEffect } from "react"

// GraphQl
import { useStaticQuery, graphql } from "gatsby"

export const ProductsStateContext = createContext(null)

export const ProductsContextProvider = ({ children }) => {
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
                  bottomImg
                  leftImg
                  rightImg
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
      price: (parseFloat(price.unit_amount_decimal) / 100).toFixed(2),
      currency: price.currency,
      priceId: price.id,
      tag: product.metadata.tag,
      bottomImg: product.metadata.bottomImg,
      leftImg: product.metadata.leftImg,
      rightImg: product.metadata.rightImg,
    })

    return null
  })

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <ProductsStateContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsStateContext.Provider>
  )
}
