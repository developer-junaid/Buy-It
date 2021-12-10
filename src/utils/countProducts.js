export const countProducts = products => {
  const productIds = []
  const productsCount = []

  // Make product Ids Array
  products.map(product => {
    productIds.push(product.id)
  })

  // Make uniqueIds array
  const uniqueIds = productIds.filter(
    (item, index) => productIds.indexOf(item) === index
  )

  // Count Items
  uniqueIds.map(id => {
    const count = productIds.filter(item => item === id).length

    productsCount.push({
      id,
      count,
    })
  })

  return productsCount
}
