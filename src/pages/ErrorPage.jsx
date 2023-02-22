import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="container px-4 py-5 flex flex-col gap-1 items-center">
                <div className="img-container w-full">
                    <img src="/error404.avif" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 font-semibold ">
                    <p className="text-2xl">Page Not Found.</p>
                    <Link to="/" className="text-sm border p-2 text-center self-center text-white bg-primary-bg-default">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage