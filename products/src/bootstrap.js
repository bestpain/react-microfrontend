import { faker } from '@faker-js/faker';

console.log("products file")

const mount = (ele) => {
    let products = ''
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    ele.innerHTML = products
}

// let rootElement =  document.getElementById('products')
// rootElement.innerHTML = products


//when running from local
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#products')
    if (element) {
        mount(element)
    }
}

//when running from container
export { mount }

