import React from "react";
import { Link } from "react-router-dom";


const Product = ({ id,thumbnail,title,price }) => {
    // console.log(product.id)
    return (
        <article>
            <Link to={"/products/"+id}>
                <div className="flex flex-col">
                    <div className="img-container w-full h-42">
                        <img src={thumbnail} alt={title} className="w-full h-full aspect-square object-cover" />
                    </div>
                    <div className="about-container text-sm font-semibold flex px-1">
                        <p>{title} | {price}</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}
export default Product;