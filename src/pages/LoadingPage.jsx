import React from "react";
import {ImSpinner11} from "react-icons/im"

const LoadingPage = () => {
    return (
        <section>
            <div className="border h-screen flex items-center justify-center text-3xl font-bold">
                <ImSpinner11 className="animate-spin" />
            </div>
        </section>
    )
}
export default LoadingPage;