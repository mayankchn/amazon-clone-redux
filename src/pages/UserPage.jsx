import { signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { signoutAction } from "../actions/user"
import { auth } from "../firebase"
import { userSelector } from "../selectors/user"

const UserPage = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('logoiut button clicked....')
        signOut(auth)
        dispatch(signoutAction())
    }

    const user = useSelector(userSelector)

    return (
        <section>
            <div className="container max-w-screen-2xl px-4 py-5 h-screen">
                <div className="flex flex-col gap-5 items-start border-2 max-w-xl mx-auto px-3 py-5 border-yellow-500 rounded">
                    <div className="font-bold text-xl">
                        Your Account
                    </div>
                    <p className="text-lg"><span>Hello, </span><span className="font-bold">{user.email.slice(0,user.email.indexOf('@'))}</span></p>
                    <button type="button" className="font-bold text-white border-2 px-2 py-1 bg-yellow-400 border-yellow-500 rounded" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </section>
    )
}
export default UserPage
