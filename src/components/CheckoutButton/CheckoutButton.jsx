import React from "react"

// Links
import { CHECKOUT } from "../../constants/Permalinks"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

// Checkout
export const CheckoutButton = ({ cartItems }) => {
  // Redirect
  const redirectToCheckout = async () => {
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

  // Return
  return (
    <button
      className="bg-purple-800 text-white px-4 py-3 my-4 self-center"
      onClick={redirectToCheckout}
    >
      Checkout
    </button>
  )
}
