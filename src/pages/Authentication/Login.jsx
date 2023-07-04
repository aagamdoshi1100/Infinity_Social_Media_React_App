import { NavLink } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";

export default function Login(){
    const {user,setUser,loginHandler} =useAuthContext(); 
    return(<div>
        <h3>Login Page</h3>
        <input type="text" placeholder="Enter username..." onChange={(e)=>setUser({...user, auth:{...user.auth, username:e.target.value}})}/>
        <input type="text" placeholder="Enter password..."  onChange={(e)=>setUser({...user, auth:{...user.auth, password:e.target.value}})}/>
        <button onClick={loginHandler}>Login</button> 
        <NavLink to="/pages/Authentication/SignUp">Don't have an account? Sign up</NavLink>
        <p>{user.errorMessage}</p>
    </div>)
}