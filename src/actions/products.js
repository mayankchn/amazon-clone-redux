export const LOAD_PRODUCTS = "LOAD_PRODUCTS"
export const PRODUCTS_LOADED = "PRODUCTS_LOADED"
export const PRODUCT_LOADED = "PRODUCT_LOADED"

export const loadProductsAction = (loading) => {
    return {
        type:LOAD_PRODUCTS,
        payload:loading
    }
}

export const productsLoadedAction = (products) => {
    return {
        type:PRODUCTS_LOADED,
        payload:products
    }
}

export const productLoadedAction = (product) => {
    return {
        type:PRODUCT_LOADED,
        payload:product
    }
}