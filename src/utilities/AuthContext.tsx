/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,useContext,useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider:React.FC<{children:React.ReactNode}> = ({children})=>{
    const [user,setUser] = useState("")

    const login:(newUser:string)=>void = (newUser)=>{
        setUser(newUser)
    } 
    const logout:()=>void = ()=>{
        setUser("")
    }
    const value:any = {user,login,logout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    )
} 