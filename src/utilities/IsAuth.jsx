
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
import web3 from "../services/web3"
import { useState, useEffect } from "react"
import  ScaleLoader  from 'react-spinners/ScaleLoader';


const IsAuth= ({children})=>{
const [account,setAccount] = useState(null)
useEffect(()=>{
 web3.eth.requestAccounts()
    .then(account=>{
        if(account[0]){
           setAccount(account[0])
        }else{
            setAccount("")
        }
    })
    .catch(()=>{
        setAccount("")
    })
},[])
if(account == null){
    return <ScaleLoader
    color={'#ffffff'}
    loading={true}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
}
if(account == ""){
    return <Navigate to={'/login'}/>
}
return <>{children}</>
} 

export default IsAuth
IsAuth.propTypes = {
    children:PropTypes.node
  }