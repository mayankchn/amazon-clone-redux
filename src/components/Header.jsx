import React from "react";
import { CgProfile } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux";
import { cartQuantitySelector } from "../selectors/cart";
import { BsCart2 } from "react-icons/bs"
import { Link } from "react-router-dom";
import { userSelector } from "../selectors/user";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { signoutAction } from "../actions/user";

const Header = () => {
    const cartQuantity = useSelector(cartQuantitySelector)
    const user = useSelector(userSelector)
    const dispatch = useDispatch()
    // console.log('cart quantity : ', cartQuantity)

    return (
        <header className="border h-12 bg-primary-bg-default flex items-center">
            <div className="container flex gap-2 justify-between px-3 items-center max-w-screen-2xl">
                {/* <div className="w-24 h-7">
                <img src="/amazon-logo.png" alt="" className="w-full h-full object-cover aspect-square" />
            </div> */}
                <Link to="/">
                    <p className="text-white font-bold">
                        <span className="text-2xl">amazon</span>
                        <span className="text-xs">.in</span>
                    </p>
                </Link>
                <div className="flex gap-5">
                    {!user ?
                        <Link to="/signup">
                            <div className="text-white font-xl flex gap-1 items-center">
                                <p className="text-xs font-bold">Sign up</p>
                                <CgProfile className="text-3xl" />
                            </div>
                        </Link> : 
                        <Link to="/user" className="text-white">Hello,{user.email.slice(0,user.email.indexOf('@'))}</Link>
                        }
                    <Link to="/cart">
                        <div className="text-white relative">
                            <BsCart2 className="text-3xl" />
                            <span className="text-xs absolute -translate-x-1/2 -translate-y-full left-1/2 top-1/4 text-white rounded-full px-1">{cartQuantity}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header