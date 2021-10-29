// Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// Get All Products
const handler = async event => {
  try {
    // Get Products (only active)
    const products = await stripe.products.list({
      active: true,
    })

    const headers = {
      "Access-Control-Allow-Origin": "*",
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ products: products }),
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
