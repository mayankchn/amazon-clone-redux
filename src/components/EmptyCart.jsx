import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <section>
            <div className="container max-w-screen-2xl px-4 py-5 flex flex-col items-center gap-4 h-screen sm:h-full">
                <div className="rounded-md  mx-auto border p-5 bg-primary-bg-light sm:relative">
                    <img src="/empty-cart.jpg" alt="" className="w-full h-full aspect-square object-cover" />
                </div>
                <div className="flex flex-col gap-1 justify-center items-center sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 top-1/2 left-1/2 sm:gap-3">
                    <p className="text-2xl font-semibold sm:text-5xl sm:text-white">Your Cart is Empty.</p>
                    <Link to="/">
                        <button type="button" className="px-5 py-2 text-lg font-bold bg-yellow-300 self-center rounded-md">Return to Home</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default EmptyCart;