const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

const handler = async event => {
  // const origin = event.multiValueHeaders.origin[0]
  const { cartItems } = JSON.parse(event.body)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [...cartItems],
      mode: "payment",
      success_url: `/payment-success`,
      cancel_url: `/`,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
