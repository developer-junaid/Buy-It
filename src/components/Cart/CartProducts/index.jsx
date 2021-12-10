import React from "react"

// Components
import { CartProduct } from "./CartProduct"

export const CartProducts = () => {
  return (
    <table class="w-full text-sm lg:text-base" cellspacing="0">
      <thead>
        <tr class="h-12 uppercase">
          <th class="hidden md:table-cell"></th>
          <th class="text-left">Product</th>
          <th class="lg:text-right text-left pl-5 lg:pl-0">
            <span class="lg:hidden" title="Quantity">
              Qtd
            </span>
            <span class="hidden lg:inline">Quantity</span>
          </th>
          <th class="hidden text-right md:table-cell">Unit price</th>
          <th class="text-right">Total price</th>
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
