import { combineReducers, createStore } from "redux";
import productsReducer from "./ducks/products"
import cartReducer from "./ducks/cart";
import userReducer from "./ducks/user";

const reducer = combineReducers({
    products:productsReducer,
    cart:cartReducer,
    user:userReducer,
})

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store