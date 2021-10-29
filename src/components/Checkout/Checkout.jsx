import React from "react"

// Links
import { CHECKOUT } from "../../constants/Permalinks"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

// Checkout
export const Checkout = () => {
  // Redirect
  const redirectToCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch(CHECKOUT)
    const data = await response.json()

    // Call Stripe's checkout function
    await stripe.redirectToCheckout({
      sessionId: data.id,
    })
  }

  // Return
  return (
    <div>
      <h2>Sun Glasses</h2>
      <button onClick={redirectToCheckout}>Buy</button>
    </div>
  )
}
