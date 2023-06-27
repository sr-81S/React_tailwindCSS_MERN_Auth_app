import React, { useEffect, useState } from 'react'
import profileImage from "../assets/Profile.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



let mount = false;


const Profile = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
    })

    const navigate = useNavigate()

    const data = sessionStorage.getItem("token");
    console.log(data);

    useEffect(() => {
      
       if(mount){
        getAuthData();
        
       }

       mount = true;

        return ()=>{
            // cleanup function
        }
    
    }, [])
    





    const getAuthData = async()=>{
        if(!data){
            toast.warn('please login first', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
           navigate('/'); 
        }else{
            try {
                const responce = await fetch('http://localhost:4000/api/profile',{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${data}`,
                    },
                    mode: "cors"
                })

                const responceData = await responce.json();
                console.log(responceData);
                setUser(responceData);
            } catch (error) {
                toast.error('server login error', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/')
            }
        }
    }

    const logout = ()=>{
        sessionStorage.clear();
        navigate('/');
    }




  return (
    <div className='bg-gray-50 min-h-screen flex justify-center items-center flex-col' >
        <h1 className='my-3 text-teal-700 text-lg font-semibold' >After Log in Your Profile Details Here</h1>
        <div className='flex items-center gap-4 bg-gray-100 px-5 py-3 border rounded-lg' >
            <img className='h-32' src={profileImage} alt="profile_icon" />
            <div className='flex flex-col gap-3' >
                <h3 className='text-4xl font-semibold text-teal-700 pr-4' >Name: {user.name}</h3>
                <p className=' text-teal-700 text-lg font-medium' >Email: {user.email}</p>
            </div>
            
        </div>
        <div className='flex gap-3 mt-5' >
        <button className='bg-emerald-600 px-14 border rounded-lg py-3 text-lg text-white font-medium' >Edit details</button>
        <button className='bg-red-600 px-16 border rounded-lg py-3 text-lg text-white font-medium' onClick={logout} >Log Out</button>
        </div>
    </div>
  )
}

export default Profile