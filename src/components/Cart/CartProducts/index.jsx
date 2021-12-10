import React from "react"

// Components
import { CartProduct } from "./CartProduct"

export const CartProducts = () => {
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
        <CartProduct
          name="Earphone"
          unitPrice={10}
          imageSrc="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
        />

        <CartProduct
          name="Tesla Model 3"
          unitPrice={49600}
          imageSrc="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png"
        />

        <CartProduct
          name="Bic 4 colour pen"
          unitPrice={1.5}
          imageSrc="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg"
        />
      </tbody>
    </table>
  )
}
