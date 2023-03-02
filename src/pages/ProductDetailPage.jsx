import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartAction } from "../actions/cart";
import { productLoadedAction } from "../actions/products";
import { getProduct } from "../api";
import { productSelector } from "../selectors/products";
import LoadingPage from "./LoadingPage";

const ProductDetailPage = () => {
    const id = +useParams().id

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0)

    const [loading, setLoading] = useState(true)

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleAddToCart = () => {
        dispatch(addToCartAction(id, +quantity))
        setQuantity(0)
    }

    useEffect(() => {
        getProduct(id).then((response) => {
            dispatch(productLoadedAction(response))
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    const product = useSelector(productSelector)

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    return (
        <section className="sm:h-screen">
            <div className="container flex flex-col gap-5 py-5 px-4 max-w-screen-2xl sm:flex-row sm:justify-center lg:justify-between">
                <div className="text-sm order-1 sm:order-2 sm:w-1/3">
                    <span className="font-bold">{product.title}</span>{" "}<span>{product.description}</span>
                </div>
                <div className="image-container order-2 sm:order-1 sm:w-2/3 sm:max-w-sm lg:max-w-md">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full aspect-square object-cover" />
                </div>
                <div className="others-container flex flex-col gap-3 order-3 sm:w-1/3">
                    <span className="font-semibold text-4xl">${product.price}</span>
                    <input type="number" className="border rounded-xl px-2 w-20 h-8" placeholder="Qty: 1" value={quantity} onChange={handleQuantityChange} />
                    <button
                        className="font-semibold bg-yellow-500 px-4 py-3 rounded-full disabled:bg-yellow-200"
                        disabled={quantity < 1}
                        onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}
export default ProductDetailPage
