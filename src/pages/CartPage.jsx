import { useSelector } from "react-redux";
import CartList from "../components/CartList";
import { cartSelector } from "../selectors/cart";
import { productsMapStateSelector } from "../selectors/products";

const CartPage = () => {
    const cart = useSelector(cartSelector)
    // console.log('cart ',cart)

    const productsMap = useSelector(productsMapStateSelector)
    // console.log('products map ',productsMap)

    const cartProducts = Object.keys(cart).map((id)=>{
        return productsMap[id]
    })
    // console.log('cart products ',cartProducts)

    return (
        <section>
                {cartProducts && <CartList cartProducts={cartProducts} />}
        </section>
    )
}
export default CartPage;