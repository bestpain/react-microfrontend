import { faker } from '@faker-js/faker'

const cartSize = `<div>total items in cart is ${faker.number.octal()} </div>`;
console.log("carts file")
document.querySelector('#cart').innerHTML = cartSize;
