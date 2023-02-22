import React from "react";
import {MdLanguage} from "react-icons/md"


const Footer = () => {
    return (
        <footer className="bg-primary-bg-default">
            <div className="container px-3 text-white py-5 flex flex-col items-center gap-6 max-w-screen-2xl">
                <div className="text-white flex items-center text-sm gap-2">
                    <MdLanguage className="text-white text-md"/>
                    <p>English</p>
                </div>
                <p className="text-sm font-semibold">Already a customer? Sign in</p>
                <div className="text-xs text-white flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-5">
                        <span>Condition and Use</span>
                        <span>Privacy Notice</span>
                        <span>Interest-Based Ads</span>
                    </div>
                    <p>© 1996-2023, Amazon.com, Inc. and its affiliates</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer