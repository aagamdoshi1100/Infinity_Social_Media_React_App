import {BiLogOut,BiBookBookmark} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import "./Footer.css"
import useUserFeedContext from "../../contexts/UserFeedContext"
export default function Footer(){
    const {navigate} = useUserFeedContext()
    return(<div className="footer">
        <AiOutlineHome size= "1.8em" onClick={()=>navigate("/")} />
        <MdOutlineExplore size= "1.8em" onClick={()=>navigate('/pages/explore/Explore')}/>
        <BiBookBookmark size= "1.8em"/>
        <BiLogOut size= "1.8em" onClick={()=>localStorage.removeItem("encodedToken")}/>
    </div>)
}