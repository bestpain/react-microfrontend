import { mount as productMount} from 'productsApp/ProductsIndex'
import { mount as cartMount} from  'cartsApp/CartsIndex'

productMount(document.querySelector('#host-products'))
cartMount(document.querySelector('#host-cart'))
