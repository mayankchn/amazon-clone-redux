import produce from "immer";
import { LOG_IN, LOG_OUT, SIGN_UP, UPDATE_USER } from "../../actions/user";

const initialState = {
    user: undefined
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return produce(state, (draft) => {
                draft.user = action.payload
            })
        case LOG_IN:
            return produce(state, (draft) => {
                draft.user = action.payload
            })
        case LOG_OUT:
            return produce(state, (draft) => {
                draft.user = undefined
            })
        case UPDATE_USER:
            return produce(state, (draft) => {
                draft.user = action.payload
            })
        default:
            return state
    }
}
export default userReducer