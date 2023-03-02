import { useSelector } from "react-redux"
import { cartSelector } from "../selectors/cart"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"

const CartList = ({ cartProducts, subtotal }) => {

    const cart = useSelector(cartSelector)
    console.log('cart is ', cart)

    return (
        <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                {subtotal > 0 ? <div className="flex flex-col gap-3 py-3 order-1 sm:order-2 sm:w-1/3">
                    <p className="text-xl">
                        <span className="font-semibold">Subtotal </span>
                        <span className="font-bold">${subtotal}</span>
                    </p>
                    <button className="bg-yellow-300 px-5 py-3 font-semibold rounded">Proceed to Buy</button>
                </div> : <EmptyCart />}
                <div className="flex flex-col gap-3 order-2 sm:order-1 sm:w-2/3">
                    {subtotal > 0 ? cartProducts.map((product) => {
                        return (
                            <CartItem
                                key={product.id}
                                product={product}
                                quantity={cart[product.id]}
                            />
                        )
                    }) : <EmptyCart />}
                </div>
            </div>
        </section>
    )
}
export default CartList