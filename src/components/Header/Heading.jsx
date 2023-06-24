import "./Header.css"
import useAuthContext from "../../contexts/AuthContext"
import { useIconContext } from "../../contexts/IconContext";
export default function Heading(){
    const {loginHandler,user} = useAuthContext();
    const {BiLogIn} = useIconContext()
    return(<div className="header">
        <h3>INFINITY</h3>
        <div className="login">
        {localStorage.getItem("encodedToken") ? `Welcome, ${user.name}` :
       <BiLogIn onClick={()=>loginHandler("AD","AD123")} size="1.8em" />}
       </div>
    </div>)
}