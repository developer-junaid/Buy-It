import React from "react"

// Components
import { CartProduct } from "./CartProduct"

export const CartProducts = ({ products }) => {
  return (
    <table className="w-full text-sm lg:text-base" cellSpacing="0">
      <thead>
        <tr className="h-12 uppercase">
          <th className="hidden md:table-cell"></th>
          <th className="text-left">Product</th>
          <th className="lg:text-right text-left pl-5 lg:pl-0">
            <span className="lg:hidden" title="Quantity">
              Qtd
            </span>
            <span className="hidden lg:inline">Quantity</span>
          </th>
          <th className="hidden text-right md:table-cell">Unit price</th>
          <th className="text-right">Total price</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map(product => {
            return (
              <CartProduct
                key={product.id}
                name={product.name}
                unitPrice={product.price}
                imageSrc={product.image}
                quantity={product.quantity}
                id={product.id}
              />
            )
          })}
      </tbody>
    </table>
  )
}
