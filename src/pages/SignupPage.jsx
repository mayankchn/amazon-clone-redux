import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { auth } from "../firebase";
import {signupAction} from "../actions/user"



const validationSignupSchema = Yup.object().shape(({
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string().min(5, 'Must be 5 characters long atleast.').required('Required'),
    password: Yup.string().min(8, 'Must be 8 characters long atleast.').required('Required'),
}))

const SignupPage = () => {

    const dispatch = useDispatch();

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        onSubmit: createAccount,
        validationSchema: validationSignupSchema,

    })

    function createAccount() {
        createUserWithEmailAndPassword(auth, values.email, values.password).then((response) => {
            const user = response.user
            dispatch(signupAction(user))
        }).catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
        })
    }

    return (
        <section>
            <div className="form-container max-w-screen-2xl px-4 py-5">
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 border rounded px-3 py-5 max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold self-center uppercase text-yellow-500">Sign Up</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user-email" className="font-bold text-gray-400">Email: </label>
                        <input
                            type="email"
                            id="user-email"
                            name="email"
                            autoComplete={values.password}
                            className="border indent-2 px-3 py-5 rounded"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <div className="text-red-500 text-xs font-semibold">{errors.email}</div>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="usernameuser-pswd" className="font-bold text-gray-400">Username: </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoComplete={values.username}
                            className="border indent-2 px-3 py-5 rounded"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.username && errors.username && <div className="text-red-500 text-xs font-semibold">{errors.username}</div>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user-pswd" className="font-bold text-gray-400">Password: </label>
                        <input
                            type="password"
                            id="user-pswd"
                            name="password"
                            autoComplete={values.email}
                            className="border indent-2 px-3 py-5 rounded"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.password && errors.password && <div className="text-red-500 text-xs font-semibold">{errors.password}</div>}
                    </div>
                    <button type="submit" className="px-3 py-5 font-semibold rounded text-white bg-yellow-300 text-2xl border-2 border-yellow-500">
                        Sign Up
                    </button>
                    <p className="font-bold text-lg self-center text-gray-400">Already a user? <Link to="/login" className="text-yello-500">Login</Link></p>
                </form>
            </div>
        </section>
    )
}
export default SignupPage;