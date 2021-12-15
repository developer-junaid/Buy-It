import React, { useContext } from "react"

// Context
import { CartStateContext } from "context/cartContext"

// Checkout
import { CHECKOUT } from "constants/Permalinks"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export const OrderDetails = () => {
  const { cart } = useContext(CartStateContext)

  let subtotal = 0
  let total = 0

  // Calculate total and subtotal
  cart.map(product => {
    subtotal += product.price * product.quantity
    total += product.price * product.quantity

    return null
  })

  const redirectToCheckout = async () => {
    // Cart Items
    const cartItems = []

    cart.map(product => {
      cartItems.push({ price: product.priceId, quantity: product.quantity })
      subtotal += product.unit_price * product.quantity

      return null
    })

    const stripe = await stripePromise

    const response = await fetch(CHECKOUT, {
      method: "POST",
      body: JSON.stringify({
        cartItems,
      }),
    })
    const data = await response.json()

    // Call Stripe's checkout function
    await stripe.redirectToCheckout({
      sessionId: data.id,
    })
  }

  return (
    <div className="lg:px-2 lg:w-1/2">
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Order Details</h1>
      </div>
      <div className="p-4">
        <p className="mb-6 italic">
          Shipping and additionnal costs are calculated based on values you have
          entered
        </p>
        <div className="flex justify-between border-b">
          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            Subtotal
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
            {subtotal}$
          </div>
        </div>

        <div className="flex justify-between pt-4 border-b">
          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            Delivery
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
            Free
          </div>
        </div>
        <div className="flex justify-between pt-4 border-b">
          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            Total
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
            {total}$
          </div>
        </div>
        <button
          onClick={redirectToCheckout}
          className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
        >
          <svg
            aria-hidden="true"
            data-prefix="far"
            data-icon="credit-card"
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
            />
          </svg>
          <span className="ml-2 mt-5px">Procceed to checkout</span>
        </button>
      </div>
    </div>
  )
}
