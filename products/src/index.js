import { faker } from '@faker-js/faker';

let products = ''
for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}
console.log("products file")

// let rootElement =  document.getElementById('products')
// rootElement.innerHTML = products

document.querySelector('#products').innerHTML = products