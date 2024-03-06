
import { createContext,useContext,useState } from "react";
import PropTypes from 'prop-types'


const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState("")

    const login = (newUser)=>{
        setUser(newUser)
    } 
    const logout= ()=>{
        setUser("")
    }
    const value= {user,login,logout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    )
} 
AuthProvider.propTypes = {
    children:PropTypes.node
  }
  