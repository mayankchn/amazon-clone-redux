import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLoadedAction } from "../actions/products";
import { getProducts } from "../api";
import ProductList from "../components/ProductList";
import { productsSelector } from "../selectors/products";
import LoadingPage from "./LoadingPage";

const ProductListPage = () => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const p = getProducts().then((response)=>{
            // console.log(response)
            dispatch(productsLoadedAction(response))
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    },[])

    const products = useSelector(productsSelector)
    // console.log('products : ',products)

    if(loading){
        return (
            <LoadingPage />
        )
    }

    return (
        <div>
            <ProductList 
            products={products}
             />
        </div>
    )
}
export default ProductListPage;