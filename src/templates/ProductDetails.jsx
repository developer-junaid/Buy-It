import React from "react"
import { graphql } from "gatsby"

export default function ProductDetails({ data }) {
  //prod_KU4C192mG6l4Zh
  // console.log("DATA :", data)
  const product = data.price.product
  const price = data.price
  console.log("Product details : ", product)
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.images[0]} alt={product.name} />
      <p>Price: ${price.unit_amount_decimal / 100}</p>
      <p>{product.description}</p>
    </div>
  )
}

export const query = graphql`
  query GetProductDetails($id: String) {
    price: stripePrice(id: { eq: $id }) {
      id
      currency
      unit_amount_decimal
      product {
        id
        name
        description
        images
      }
    }
  }
`
