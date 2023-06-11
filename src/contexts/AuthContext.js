import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState({name:""})
    const loginHandler = async(username,password)=>{
        try{
            const response = await fetch("/api/auth/login",{
                method:"POST",
                body : JSON.stringify({username,password})
            })
            const {encodedToken} = await response.json()
            localStorage.setItem("encodedToken",encodedToken)
            setUser({...user,name:username})
        }catch(e){
            console.log("🚀 ~ file: AuthContext.js:13 ~ loginHandler ~ e:", e)
            
        }
    }
    return(<AuthContext.Provider value={{loginHandler,user}}>{children}</AuthContext.Provider>)
}

const useAuthContext =()=> useContext(AuthContext);
export default useAuthContext;