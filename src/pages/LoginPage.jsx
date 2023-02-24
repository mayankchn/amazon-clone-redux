import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik"
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signinAction } from "../actions/user";

const validationLoginSchema = Yup.object().shape(({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
}))

const LoginPage = () => {

    const dispatch = useDispatch()

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: callApi,
        validationSchema: validationLoginSchema,

    })

    function callApi() {
        console.log('login api called with value ',)
        signInWithEmailAndPassword(auth, values.email, values.password).then((response) => {
            console.log('response is ', response)
            const user = response.user
            dispatch(signinAction(user))
        }).catch((error) => {
            console.log('error is ', error)
            const errorCode = error.code
            const errorMessage = error.message
        })
    }

    return (
        <section>
            <div className="form-container max-w-screen-2xl px-4 py-5">
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 border rounded px-3 py-5 max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold self-center uppercase text-yellow-500">Login Page</h1>
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
                        Login
                    </button>
                    <p className="font-bold text-lg self-center text-gray-400">New here? <Link to="/signup" className="text-yello-500">Signup</Link></p>
                </form>
            </div>
        </section>
    )
}
export default LoginPage;