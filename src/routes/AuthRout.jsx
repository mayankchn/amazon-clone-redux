import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { userSelector } from "../selectors/user"

const AuthRoute = ({children}) => {
    const user = useSelector(userSelector)
    if(user){
        return <Navigate to="/" />
    }
    return children
}
export default AuthRoute;