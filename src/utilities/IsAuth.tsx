import { useAuth } from "./AuthContext"
import { authContextType } from "../types/types"
import { Navigate } from "react-router-dom"

const IsAuth:React.FC<{children:React.ReactNode}> = ({children})=>{
const auth:authContextType = useAuth()
if(auth!.user.length<10){
    return<Navigate to={'/login'}/>
} 
    return(
        <>{children}</>
    ) 
} 

export default IsAuth