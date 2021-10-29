// Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// Get All Products
const handler = async () => {
  try {
    // Get Prices (only active)
    const pricesResponse = await stripe.prices.list({
      active: true,
    })

    // Get Products (only active)
    const productsResponse = await stripe.products.list({
      active: true,
    })

    // Data
    const allPrices = pricesResponse.data
    const allProducts = productsResponse.data

    // Combine Prices with products object
    const products = []

    allPrices.map(price => {
      const productId = price.product
      allProducts.map(product => {
        if (product.id === productId) {
          products.push({
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.images[0],
            price: parseFloat(price.unit_amount_decimal) / 100,
            currency: price.currency,
          })
        }
      })
    })

    const headers = {
      "Access-Control-Allow-Origin": "*",
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ products: products }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
