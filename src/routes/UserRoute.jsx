import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { userSelector, userStateSelector } from "../selectors/user"

const UserRoute = ({ children }) => {
    const user = useSelector(userSelector)
    if (!user) {
        return <Navigate to="/signup" />
    }
    return children
}
export default UserRoute;