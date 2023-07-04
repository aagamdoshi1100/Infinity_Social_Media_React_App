import { NavLink } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";
import "./Authentication.css"
import { useIconContext } from "../../contexts/IconContext";

export default function Login(){
    const {user,setUser,loginHandler} =useAuthContext(); 
    const {GiInfinity} = useIconContext();
    return(<div className="parent-container">
        <div className="login-container">
        <GiInfinity className="logo"/>
        <h2 className="brand-name">Infinity</h2>
        <input type="text" placeholder="Enter username..." onChange={(e)=>setUser({...user, auth:{...user.auth, username:e.target.value}})}/>
        <input type="text" placeholder="Enter password..."  onChange={(e)=>setUser({...user, auth:{...user.auth, password:e.target.value}})}/>
        <button onClick={loginHandler}>Login</button> 
        <NavLink className="url" to="/pages/Authentication/SignUp">Don't have an account? Sign up</NavLink>
        <h5>{user.errorMessage}</h5>
        <p>Social Media React App</p> 
        </div>
    </div>)
}