import { useAuth } from "./AuthContext"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'


const IsAuth= ({children})=>{
const auth = useAuth()
if(auth.user.length<10){
    return<Navigate to={'/login'}/>
} 
    return(
        <>{children}</>
    ) 
} 

export default IsAuth
IsAuth.propTypes = {
    children:PropTypes.node
  }