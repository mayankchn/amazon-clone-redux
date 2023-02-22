import produce from "immer";
import { ADD_TO_CART } from "../../actions/cart";

const initialState = {
    cart: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return produce(state, (draft) => {
                const { id, quantity } = action.payload
                const prevQuantity = draft.cart[id] || 0
                draft.cart = {...draft.cart, [id]: prevQuantity + quantity }
            })
        default:
            return state;
    }
}
export default cartReducer;