import { useSelector } from "react-redux";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
import { cartSelector } from "../selectors/cart";
import { productsMapStateSelector } from "../selectors/products";

const CartPage = () => {
    const cart = useSelector(cartSelector)
    // console.log('cart ',cart)

    const productsMap = useSelector(productsMapStateSelector)
    // console.log('products map ',productsMap)

    const cartProducts = Object.keys(cart).map((id) => {
        return productsMap[id]
    })
    // console.log('cart products ',cartProducts)

    if (cartProducts.length < 1) {
        return (
            <EmptyCart />
        )
    }

    return (
        <section>
            <div className="container max-w-screen-2xl px-4 py-5">
                {<CartList cartProducts={cartProducts} />}
            </div>
        </section>
    )
}
export default CartPage;