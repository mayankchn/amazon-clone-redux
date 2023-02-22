export const ADD_TO_CART = "ADD_TO_CART"
export const INC_CART = "INC_CART"
export const DEC_CART = "DEC_CART"
export const DEL_CART = "DEL_CART"

export const addToCartAction = (p_id, p_quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: p_id,
            quantity: p_quantity,
        }
    }
}

export const incrementCartAction = (p_id) => {
    return {
        type: INC_CART,
        payload: p_id
    }
}

export const decrementCartAction = (p_id) => {
    return {
        type: DEC_CART,
        payload: p_id
    }
}

export const deleteCartAction = (p_id) => {
    return {
        type: DEL_CART,
        payload: p_id
    }
}

