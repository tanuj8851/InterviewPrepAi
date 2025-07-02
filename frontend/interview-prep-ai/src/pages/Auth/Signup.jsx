import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from './../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';
import { UserContext } from './../../context/userContext';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import uploadImage from '../../utils/uploadImage';

const Signup = ({ setCurrentPage }) => {

    const [profilePic, setProfilePic] = useState(null);
    const [fullName, SetFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    //Handle  Signup Form Submit
    const handleSignup = async (e) => {
        e.preventDefault();

        let profileImageUrl = '';

        console.log({
            fullName, email, password
        });


        if (!fullName) {
            setError("Please Enter FullName.")
        }

        if (!validateEmail) {
            setError("Please Enter a valid Email Address.")
        }

        if (!password) {
            setError("Please Enter the Password.")
        }

        setError("")

        //Signup Api Call
        try {
            //Upload Image  if present
            if (profilePic) {
                const imgUploadRes = await uploadImage(profilePic);
                profileImageUrl = imgUploadRes.imageUrl || ""
            }

            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                name: fullName, email, password, profileImageUrl
            })

            const { token } = response.data;
            if (token) {
                localStorage.setItem("token", token);
                updateUser(response.data);
                navigate("/dashboard")
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
                Create An Account
            </h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join Us today  by entering your details below.</p>

            <form onSubmit={handleSignup}>

                <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

                <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
                    <Input
                        value={fullName}
                        onChange={(e) => SetFullName(e.target.value)}
                        label="FullName"
                        placeholder={"John"}
                        type="text"
                    />

                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        placeholder={"John@email.com"}
                        type="text"
                    />

                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder={"Min 8 Characters"}
                        type="password"
                    />

                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-black text-white text-sm font-semibold px-6 py-2.5  hover:bg-yellow-100 hover:text-black transition-colors cursor-pointer"
                    >
                        SIGNUP
                    </button>

                    <p className='text-[13px] text-slate-800 mt-3'>Already have an account?{" "}
                        <button className='font-medium text-primary underline cursor-pointer'
                            onClick={() => setCurrentPage("login")}> Login</button>
                    </p>

                </div>
            </form>
        </div>

    )
}

export default Signup