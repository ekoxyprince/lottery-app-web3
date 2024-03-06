
import { createContext,useContext,useState } from "react";
import PropTypes from 'prop-types'
import web3 from "../services/web3";
import toast from 'react-hot-toast';

const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState("")

    const login = (setLoader)=>{
     return  web3.eth.requestAccounts()
      .then(account=>{
        setUser(account[0])
       return account[0]
      })
      .catch(error=>{
        setLoader(false)
         toast.error(error.message)
      })
    } 
    const logout= ()=>{
        
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
  