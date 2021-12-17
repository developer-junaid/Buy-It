const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

const handler = async event => {
  const origin = event.headers.origin

  console.log("ORIGIN: ")
  try {
    const { cartItems } = JSON.parse(event.body)
    console.log("cart items got: ", cartItems)
    console.log("BODY: ", event.body)

    console.log("RUNNING SESSION CODE: ")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [...cartItems],
      mode: "payment",
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/`,
    })

    console.log("AFTER SESSION CODE: ", session)
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
