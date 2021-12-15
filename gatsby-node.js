exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query GetProductsPrices {
      prices: allStripePrice(
        filter: { active: { eq: true }, product: { active: { eq: true } } }
      ) {
        edges {
          node {
            id
            currency
            product {
              id
              description
              images
              name
              localFiles {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            unit_amount_decimal
          }
        }
      }
    }
  `)
  const prices = data.prices.edges
  // Createpages 'product'
  prices.forEach(({ node: price }) => {
    const product = price.product
    actions.createPage({
      path: `product/${product.id}`,
      component: require.resolve(`./src/templates/ProductDetails.jsx`),
      context: { id: price.id },
    })
  })
}
