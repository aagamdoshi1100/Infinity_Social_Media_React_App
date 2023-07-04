import { NavLink } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";
import "./Authentication.css"
import { useIconContext } from "../../contexts/IconContext";

export default function SignUp(){
    const {user,setUser,signUphandler} = useAuthContext(); 
    const {GiInfinity} = useIconContext();
    return(<div className="parent-container">
        <div className="login-container">
        <GiInfinity className="logo"/><h2 className="brand-name">Infinity</h2>
        <input type="text" placeholder="Email..." onChange={(e)=>setUser({...user, auth:{...user.auth, email:e.target.value}})} />
        <input type="text" placeholder="First name..." onChange={(e)=>setUser({...user, auth:{...user.auth, firstname:e.target.value}})}/>        
        <input type="text" placeholder="Last name..." onChange={(e)=>setUser({...user, auth:{...user.auth, lastname:e.target.value}})}/>
        <input type="text" placeholder="Username..." onChange={(e)=>setUser({...user, auth:{...user.auth, username:e.target.value}})}/>
        <input type="text" placeholder="Password..." onChange={(e)=>setUser({...user, auth:{...user.auth, password:e.target.value}})}/>
        <input type="text" placeholder="Confirm password..." onChange={(e)=>setUser({...user, auth:{...user.auth, password:e.target.value}})}/>
        <button onClick={signUphandler}>Sign Up</button>
        <NavLink className="url" to="/" >Aleady have an account? Login</NavLink>
        <p>Social Media React App</p> 
        </div>
    </div>)
}