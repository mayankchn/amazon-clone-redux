import { current } from "immer";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../api";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
import { cartSelector } from "../selectors/cart";
import { productsMapStateSelector } from "../selectors/products";
import LoadingPage from "./LoadingPage";

const CartPage = () => {

    const cart = useSelector(cartSelector)

    /* 
     // console.log('cart ',cart)
 
     const productsMap = useSelector(productsMapStateSelector)
     // console.log('products map ',productsMap)
 
     const cartProducts = Object.keys(cart).map((id) => {
         return productsMap[id]
     })
     // console.log('cart products ',cartProducts)
     */

    const [loading, setLoading] = useState(true)
    const [localCart, setLocalCart] = useState([])

    useEffect(() => {
        const keys = Object.keys(cart).filter((id)=>{
            return cart[id]!==0;
        })
        console.log('filtered keys ',keys)
        const promise = keys.map((id) => {
            return getProduct(id).then((response) => {
                return response
            })
        })
        Promise.all(promise).then((response) => {
            setLocalCart(response)
            setLoading(false)
        })
    }, [cart])
    // console.log('cart items ', localCart)

    const subtotal = localCart.reduce((output, current) => {
        // console.log('output and current ',output,current)
        return output + cart[current.id] * current.price
    }, 0)
    // console.log('subtotal is ',subtotal)

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    if (subtotal < 1) {
        return (
            <EmptyCart />
        )
    }

    return (
        <section>
            <div className="container max-w-screen-2xl px-4 py-5">
               <CartList cartProducts={localCart} subtotal={subtotal} />
            </div>
        </section>
    )
}
export default CartPage;