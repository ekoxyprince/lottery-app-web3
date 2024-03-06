
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
import web3 from "../services/web3"
import { useEffect } from "react"
import  HashLoader  from 'react-spinners/HashLoader';
import { useAuth } from "./AuthContext";


const IsAuth= ({children})=>{
const auth = useAuth()
useEffect(()=>{
 web3.eth.requestAccounts()
    .then(account=>{
        if(account[0]){
          return auth.setUser(account[0])
        }
       auth.setUser("")

    })
    .catch(()=>{
        auth.setUser("")
    })
},[])
console.log(auth.user)
if(auth.user == null){
    return<div className="w-[100%] h-[100vh] flex items-center justify-center">
    <HashLoader
    color={'#ffffff'}
    loading={true}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    </div> 
}
if(auth.user == ""){
    return <Navigate to={'/login'}/>
}
return <>{children}</>
} 

export default IsAuth
IsAuth.propTypes = {
    children:PropTypes.node
  }