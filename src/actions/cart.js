export const ADD_TO_CART = "ADD_TO_CART"

export const addToCartAction = (p_id,p_quantity) => {
    // console.log("add to cart clicked...",p_id,p_quantity)
    return {
        type:ADD_TO_CART,
        payload:{
            id:p_id,
            quantity:p_quantity,
        }
    }
}