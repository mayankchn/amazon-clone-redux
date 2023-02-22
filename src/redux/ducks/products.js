import produce from "immer"
import { normalize, schema } from "normalizr"
import { PRODUCTS_LOADED, PRODUCT_LOADED } from "../../actions/products"

const initialState = {
    products: {},
    product:{}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_LOADED:
            return produce(state, (draft) => {
                const products = action.payload
                const product = new schema.Entity('products',
                    {
                        products: 'id'
                    })
                // console.log(product)
                const normalizedData = normalize(products, [product])
                // console.log(normalizedData)
                draft.products = normalizedData.entities.products
            })
        case PRODUCT_LOADED : 
            return produce(state, (draft)=>{
                draft.product=action.payload
            })
        default:
            return state
    }
}
export default productsReducer;