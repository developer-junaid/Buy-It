import React, { useContext } from "react"

// Components
import { CartProducts } from "./CartProducts"
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
          {cart.length > 0 ? (
            <CartProducts products={cart} />
          ) : (
            <div className="bg-gray-200 flex justify-center items-center text-center p-6 rounded-md">
              <span className=" text-xl text-gray-800">Cart is Empty</span>
            </div>
          )}

          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
              <DeliveryInstructions />
            </div>
            <OrderDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
