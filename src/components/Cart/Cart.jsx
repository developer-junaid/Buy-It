import React from "react"

// Components
import { CartProducts } from "./CartProducts"
import { CouponCode } from "./CouponCode"
import { DeliveryInstructions } from "./DeliveryInstructions"
import { OrderDetails } from "./OrderDetails"

export const Cart = () => {
  return (
    <div class="flex justify-center my-6">
      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex-1">
          <CartProducts />
          <hr class="pb-6 mt-6" />
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-1/2">
              <CouponCode />
              <DeliveryInstructions />
            </div>
            <OrderDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
