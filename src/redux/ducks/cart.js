import produce from "immer";
import { ADD_TO_CART, DEC_CART, DEL_CART, INC_CART } from "../../actions/cart";

const initialState = {
    cart: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return produce(state, (draft) => {
                const { id, quantity } = action.payload
                const prevQuantity = draft.cart[id] || 0
                draft.cart = { ...draft.cart, [id]: prevQuantity + quantity }
            })
        case INC_CART:
            return produce(state, (draft) => {
                const id = action.payload
                const prevQuantity = draft.cart[id] || 0
                draft.cart = { ...draft.cart, [id]: prevQuantity + 1 }
            })
        case DEC_CART:
            return produce(state, (draft) => {
                const id = action.payload
                const prevQuantity = draft.cart[id] || 0
                draft.cart = { ...draft.cart, [id]: prevQuantity - 1 }
            })
        case DEL_CART : 
        return produce(state, (draft) => {
            const id = action.payload
            delete draft.cart[id]
        })
        default:
            return state;
    }
}
export default cartReducer;