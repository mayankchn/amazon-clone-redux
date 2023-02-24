import { createSelector } from "reselect";

export const userStateSelector = (state) => {
    return state.user;
}

export const userSelector = createSelector(userStateSelector, (userState)=>{
    return userState.user;
})
