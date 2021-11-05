import React from "react"
import { graphql } from "gatsby"

export default function ProductDetails({ data }) {
  //prod_KU4C192mG6l4Zh
  // console.log("DATA :", data)
  console.log("Product details : ", data)
  return (
    <div>
      <h2>Product Details</h2>
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
