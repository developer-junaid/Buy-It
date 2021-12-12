import React, { useContext } from "react"

// Components
import { CartProducts } from "./CartProducts"
import { CouponCode } from "./CouponCode"
import { DeliveryInstructions } from "./DeliveryInstructions"
import { OrderDetails } from "./OrderDetails"

// Context
import { CartStateContext } from "../../context/cartContext"

export const Cart = () => {
  // Context
  const { cart } = useContext(CartStateContext)

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <CartProducts products={cart} />
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
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
