import React, { useState } from "react"

// Icon
import { StarIcon } from "@heroicons/react/solid"

// Radio
import { RadioGroup } from "@headlessui/react"

// Graphql
import { graphql, Link } from "gatsby"
import { Breadcrumb } from "components/Breadcrumb/Breadcrumb"
import { ImageGallery } from "components/ImageGallery/ImageGallery"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function ProductDetails({ data }) {
  //prod_KU4C192mG6l4Zh
  // console.log("DATA :", data)

  const reviews = { href: "#", average: 4, totalCount: 117 }

  const product = data.price.product
  const price = data.price
  const { bottomImg, leftImg, rightImg } = product.metadata

  const [selectedSize, setSelectedSize] = useState("XL")

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
