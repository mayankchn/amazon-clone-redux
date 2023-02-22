import CartItem from "./CartItem"

const CartList = ({ cartProducts }) => {
    return (
        <section>
            <div className="container max-w-screen-2xl px-4 py-5 flex flex-col gap-3 sm:flex-row sm:gap-5">
                <div className="flex flex-col gap-3 py-3 order-1 sm:order-2 sm:w-1/3">
                    <p className="text-xl">
                        <span className="font-semibold">Subtotal </span>
                        <span className="font-bold">${600}</span>
                    </p>
                    <button className="bg-yellow-300 px-5 py-3 font-semibold rounded">Proceed to Buy</button>
                </div>
                <div className="flex flex-col gap-3 order-2 sm:order-1 sm:w-2/3">
                    {cartProducts && cartProducts.map((product) => {
                        return (
                            <CartItem key={product.id} product={product} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default CartList