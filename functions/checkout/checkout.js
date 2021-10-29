// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const handler = async event => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: "price_1Jp651Jsab2N7UO9Y1hY0la8", quantity: 1 }],
      mode: "payment",
      success_url: `http://localhost:8888/payment-success/`,
      cancel_url: `http://localhost:8888/`,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
