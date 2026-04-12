const products = require('./products.js')

function findProducts(name) {
  return products.find(product => product.name === name)
}

const result = findProducts('pizza')
console.log(result)
