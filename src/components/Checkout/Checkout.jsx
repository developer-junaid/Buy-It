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
    const response = await fetch(CHECKOUT, {
      method: "POST",
      body: JSON.stringify({
        cartItems: [
          { price: "price_1Jp651Jsab2N7UO9Y1hY0la8", quantity: 1 },
          { price: "price_1Jp640Jsab2N7UO9DGjQ8ujQ", quantity: 2 },
        ],
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
    <div>
      <h2>Sun Glasses</h2>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  )
}
