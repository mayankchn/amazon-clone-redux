export const SIGN_UP = "SIGN_UP"
export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const UPDATE_USER = "UPDATE_USER"


export const signupAction = (user) => {
    return {
        type:SIGN_UP,
        payload:user
    }
}

export const signinAction = (user) => {
    return {
        type:LOG_IN,
        payload:user,
    }
}

export const signoutAction = () => {
    return {
        type:LOG_OUT
    }
}

export const updateUserAction = (user) => {
    return {
        type:UPDATE_USER,
        payload:user
    }
}