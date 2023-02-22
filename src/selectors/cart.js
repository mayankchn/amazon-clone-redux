import { createSelector } from "reselect"

export const cartStateSelector = (state) => {
    return state.cart
}

export const cartSelector = createSelector(cartStateSelector,(cartState)=>{
    return cartState.cart
})

export const cartQuantitySelector = createSelector(
    cartSelector,(cartState)=>{
        return Object.keys(cartState).reduce((output,current)=>{
            return output+cartState[current]
        },0)
    }
)