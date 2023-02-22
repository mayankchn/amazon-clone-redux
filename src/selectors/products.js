import { createSelector } from "reselect"

export const productsStateSelector = (state) => {
    return state.products
}

export const productsMapStateSelector = createSelector(productsStateSelector,(productsState)=>{
    return productsState.products
})

export const productsSelector = createSelector(productsMapStateSelector,(productsMapState)=>{
    return Object.keys(productsMapState).map((id)=>{
        return productsMapState[id]
    })
})

export const productSelector = createSelector(productsStateSelector,(productsState)=>{
    return productsState.product
})




