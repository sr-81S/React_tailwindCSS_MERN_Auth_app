import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const LoginForm = () => {

    const [loginValue, setLoginValue] = useState({
        email: "",
        password: "",
    })

    const handelChange = (e)=>{
        const {name, value} = e.target;
        setLoginValue((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    }

    const navigate = useNavigate();


    const navi = ()=>{
        navigate("/register")
    }

    const actionLogin = async(e)=>{
        e.preventDefault();
        console.log(loginValue);
        const {email, password} = loginValue;
        if(!email || !password){
            toast.warn('field missing', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false
        }
        const responce = await fetch('http://localhost:4000/api/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        })

        const userData = await responce.json();

        const {msg, token} = userData;
        console.log("token :",token);
        console.log(msg);

        if(msg === "invalid cradential"){
            toast.error('invalid cradential', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return false
        }

        if(responce.status >=400 || !userData){
            toast.error('server error in login', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            toast.success('login successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                
                sessionStorage.setItem("token",token);

                navigate('/profile')
        }

    }


  return (
    <div className='bg-gray-50 min-h-screen flex justify-center items-center' >
        {/* login container */}
        <div className="bg-gray-100 flex p-3 rounded-2xl shadow-xl max-w-3xl items-center">
            {/* form */}
            <div className='md:w-1/2 px-12' >
                <h2 className='font-bold text-center text-2xl text-[#074FB2]' >Login</h2>
            

                <form action="" method="post" className='flex flex-col mt-5 gap-1' >
                    <label className="ml-2 font-medium text-zinc-500" htmlFor="email">Email</label>
                    <input className='p-2 rounded-lg border' type="email" name="email" value={loginValue.email} onChange={handelChange} placeholder='Enter Email' />
                    <div>
                        <label className="ml-2 text-zinc-500 font-medium" htmlFor="password">Password</label>
                        <input className='p-2 rounded-lg border w-full' type="password" name="password" value={loginValue.password} onChange={handelChange} placeholder='Enter password' />
                    </div>
                    <button className=' mt-7 bg-[#074FB2] rounded-lg text-white py-2 ' onClick={actionLogin} >Log In</button>
                </form>

                <div className='mt-10 grid  grid-cols-3 items-center text-gray-500' >
                    <hr className='border-gray-500'  />
                    <p className='text-center' >OR</p>
                    <hr className='border-gray-500'  />
                </div>

                <div className='text-sm flex justify-center gap-4 items-center  mt-4'>
                    <p className='text-[#074FB2] text-base' >Not have any account :</p>
                    <button className='py-2 px-5 bg-white border rounded-lg' onClick={navi} >Register</button>
                </div>

            </div>
            {/* image */}
            <div className='md:block hidden  w-1/2'>
                <img className='rounded-2xl' src="https://images.pexels.com/photos/815995/pexels-photo-815995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sideImage" />
            </div>
        </div>
    </div>
  )
}

export default LoginForm