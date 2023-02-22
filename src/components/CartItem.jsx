const CartItem = ({ product }) => {
    return (
        <div className="container flex gap-2 sm:gap-5">
            <div className="first-container flex flex-col gap-5 items-center w-1/2 sm:w-1/3">
                <div className="image-container">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full aspect-square object-cover" />
                </div>
                <div className="flex justify-between gap-2">
                    <button className="border px-4 py-1 rounded bg-gray-300 font-bold text-black text-xl">-</button>
                    <input type="number" className="border w-1/3" />
                    <button className="border px-4 py-1 rounded bg-gray-300 font-bold text-black text-xl">+</button>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-1/2">
                <span className="text-md">{product.title}</span>
                <span className="font-bold text-2xl">${product.price}</span>
                <span className="text-xs"><span className="font-bold">category: </span>{product.brand}</span>
                <span className="text-xs"><span className="font-bold">brand: </span>{product.category}</span>
            </div>
        </div>
    )
}
export default CartItem;