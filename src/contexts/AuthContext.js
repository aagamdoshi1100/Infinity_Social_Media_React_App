import { createContext, useContext, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState({name:"", 
    auth:{
        email:"",
        password:"",
        username:"",
        firstname:"",
        lastname:""
    },
    isLoggedIn:false,
    errorMessage:""
})
    const navigate = useNavigate();
    
    const signUphandler = async()=>{
        try{
            const response = await fetch(`/api/auth/signup`,{
                method:"POST",
                body:JSON.stringify({
                    email:user.auth.email, password:user.auth.password, username:user.auth.username, firstname:user.auth.firstname
                  })
            })
            if(response.status === 201){
                const {encodedToken,createdUser} = await response.json();
                localStorage.setItem("encodedToken",encodedToken);
                localStorage.setItem("Username",createdUser.username);
                setUser({...user,name:createdUser.username,isLoggedIn:true,errorMessage:""});
                navigate("/pages/UserFeed/UserFeed");
            }
        }catch(e){
        console.log("🚀 ~ file: AuthContext.js:20 ~ signUphandler ~ e:", e);
        }
    }

    const loginHandler = async()=>{
        try{
            const response = await fetch("/api/auth/login",{
                method:"POST",
                body : JSON.stringify({username:user.auth.username,password:user.auth.password})
            })
            if(response.status === 404){
                setUser({...user, errorMessage:"User not found"});
            }else if(response.status === 200){
                const {encodedToken} = await response.json();
                localStorage.setItem("encodedToken",encodedToken);
                localStorage.setItem("Username",user.auth.username);
                setUser({...user,name:user.auth.username,isLoggedIn:true,errorMessage:""});
                navigate("/pages/UserFeed/UserFeed")
            }  
        }catch(e){
            console.log("🚀 ~ file: AuthContext.js:13 ~ loginHandler ~ e:", e);
            
        }
    }
    const logOutHandler =()=>{
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("Username");
        localStorage.removeItem("Followings");
        setUser({...user,name:"",auth:{...user.auth,username:"",password:""},isLoggedIn:false});
        navigate("/")
    }
    return(<AuthContext.Provider value={{navigate,loginHandler,user,logOutHandler,setUser,signUphandler}}>{children}</AuthContext.Provider>)
}

const useAuthContext =()=> useContext(AuthContext);
export default useAuthContext;