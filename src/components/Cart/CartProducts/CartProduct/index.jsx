import React, { useContext, useState } from "react"

// Context

import { CartStateContext } from "../../../../context/cartContext"
export const CartProduct = ({ name, unitPrice, imageSrc, quantity, id }) => {
  const [productQuantity, setProductQuantity] = useState(quantity)

  const { cart, setCart } = useContext(CartStateContext)

  const indexOfProduct = cart.findIndex(prod => prod.id === id)

  const handleChange = event => {
    setProductQuantity(event.target.value)

    const updatedProduct = Object.assign({}, cart[indexOfProduct], {
      quantity: event.target.value,
    })

    setCart([
      ...cart.slice(0, indexOfProduct),
      updatedProduct,
      ...cart.slice(indexOfProduct + 1),
    ])
  }

  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={imageSrc} className="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>
      <td>
        <a href="#">
          <p className="mb-2 md:ml-4">{name}</p>
          <form action="" method="POST">
            <button type="submit" className="text-gray-700 md:ml-4">
              <small>(Remove item)</small>
            </button>
          </form>
        </a>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              value={productQuantity}
              onChange={handleChange}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">{unitPrice}$</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          {quantity * unitPrice}$
        </span>
      </td>
    </tr>
  )
}
