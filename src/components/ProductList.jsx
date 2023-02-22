import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
    return (
        <section>
            <div className="container px-4 py-5 max-w-screen-2xl grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 ">
                {
                    products && products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
export default ProductList