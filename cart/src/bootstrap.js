import { faker } from '@faker-js/faker'

console.log("carts file")

const mount=(ele)=>{
    const cartSize = `<div>total items in cart is ${faker.number.octal()} </div>`;
    ele.innerHTML = cartSize;
}

//when running from local
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#cart')
    if (element) {
        mount(element)
    }
}

//when running from container
export { mount }

// const cartSize = `<div>total items in cart is ${faker.number.octal()} </div>`;
// document.querySelector('#host-cart').innerHTML = cartSize;