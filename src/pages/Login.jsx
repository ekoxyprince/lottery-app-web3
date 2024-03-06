import img from '../assets/images/img1.jfif'
import { PrimaryButton } from '../components/ui/Button'
import { useAuth } from '../utilities/AuthContext'
import { useNavigate } from 'react-router-dom'
import  ScaleLoader  from 'react-spinners/ScaleLoader';
import { useState } from 'react'
import {Toaster}from 'react-hot-toast'


const Login = ()=>{
    const [loader,setLoader] = useState(false)
    const auth = useAuth()
    const navigator = useNavigate()
   async function handleLogin (){
       setLoader(true)
      const res =  await auth.login(setLoader)
      if(res&&typeof res !== 'undefined'){
        return navigator('/')
      }
    }
    return (
     <div className='w-[100%] h-[100vh] flex items-center justify-center text-white'>
        <div className='flex flex-col space-y-3 justify-center items-center'>
            <img src={img} className='w-[10rem] h-[10rem] rounded-[10rem]' alt="" />
            <div className='flex flex-col space-y-1 text-center'>
                <h2 className='text-4xl font-bold uppercase md:text-5xl'>the papafam draw</h2>
                <p className='text-sm capitalize font-normal'>get started by logging in with your metamask</p>
            </div>
            {loader?(        <ScaleLoader
        color={'#ffffff'}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):<PrimaryButton onClick={handleLogin}  text='Login With Metamask'/>}
        </div>
        <Toaster position='top-center'/>
     </div>
    )
}
export default Login