import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from './../../utils/helper';
import axiosInstance from './../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from './../../context/userContext';

const Login = ({ setCurrentPage }) => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
    const [password, setPassword] = useState("")

    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    //handle a login form submit
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail) {
            setError("Please Enter a valid Email Address.")
        }

        if (!password) {
            setError("Please Enter the Password.")
        }

        setError("")

        //Login Api Call
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email, password
            })

            const { token } = response.data;
            if (token) {
                localStorage.setItem("token", token);
                updateUser(response.data)
                navigate('/dashboard')
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            } else {
                setError("Something went Wrong. Please try again.")
            }
        }

    }

    return (
        <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
            <h3 className='text-lg font-semibold  text-black'>
                Welcome back
            </h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6 '>
                Please enter your details to log in
            </p>

            <form onSubmit={handleLogin}>

                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    label="Email Address"
                    placeholder="john@example.com"
                    type="text"
                />

                <Input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    label="Password"
                    placeholder="Min 8 Characters"
                    type="password"
                />


                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-black text-white text-sm font-semibold px-6 py-2.5  hover:bg-yellow-100 hover:text-black transition-colors"
                >
                    LOGIN
                </button>

                <p className='text-[13px] text-slate-800 mt-3'>Don't have an account?{" "}
                    <button className='font-medium text-primary underline cursor-pointer'
                        onClick={() => setCurrentPage("signup")}> Signup</button>
                </p>

            </form>
        </div>
    )
}

export default Login