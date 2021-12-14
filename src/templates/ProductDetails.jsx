import React from "react"

// Graphql
import { graphql } from "gatsby"

// Components
import { Breadcrumb } from "components/Breadcrumb/Breadcrumb"
import { ImageGallery } from "components/ImageGallery/ImageGallery"
import { ProductInfo } from "components/ProductInfo/ProductInfo"

export default function ProductDetails({ data }) {
  //prod_KU4C192mG6l4Zh
  // console.log("DATA :", data)

  const product = data.price.product
  const price = data.price
  const { bottomImg, leftImg, rightImg } = product.metadata

  console.log("Product details : ", product)

  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumb
          productName={product.name}
          id={product.id}
          category={"Shoes"}
        />
        <ImageGallery
          imageLeft={leftImg}
          imageRight={rightImg}
          imageTop={product.images[0]}
          imageBottom={bottomImg}
        />
        <ProductInfo product={product} price={price.unit_amount_decimal} />
      </div>
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
        metadata {
          bottomImg
          leftImg
          rightImg
        }
      }
    }
  }
`
