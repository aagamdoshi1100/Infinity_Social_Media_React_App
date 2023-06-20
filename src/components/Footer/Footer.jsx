import {BiLogOut,BiBookBookmark} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import "./Footer.css"
export default function Footer(){
    return(<div className="footer">
        <AiOutlineHome size= "1.8em" />
        <MdOutlineExplore size= "1.8em"/>
        <BiBookBookmark size= "1.8em"/>
        <BiLogOut size= "1.8em" onClick={()=>localStorage.removeItem("encodedToken")}/>
    </div>)
}