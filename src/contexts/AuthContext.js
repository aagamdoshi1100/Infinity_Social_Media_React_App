import { createContext, useContext, useState } from "react";
import useFollowContext from "./FollowContext";
import useUserFeedContext from "./UserFeedContext";


const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState({name:""})

    const loginHandler = async(username,password)=>{
        try{
            const response = await fetch("/api/auth/login",{
                method:"POST",
                body : JSON.stringify({username,password})
            })
            const {encodedToken} = await response.json();
            localStorage.setItem("encodedToken",encodedToken);
            localStorage.setItem("Username",username);
            setUser({...user,name:username});
        }catch(e){
            console.log("🚀 ~ file: AuthContext.js:13 ~ loginHandler ~ e:", e);
            
        }
    }
    const logOutHandler =()=>{
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("Username");
        localStorage.removeItem("Followings");
        setUser({...user,name:""});
    }
    return(<AuthContext.Provider value={{loginHandler,user,logOutHandler}}>{children}</AuthContext.Provider>)
}

const useAuthContext =()=> useContext(AuthContext);
export default useAuthContext;