import "./Footer.css"
import { useIconContext } from "../../contexts/IconContext"
import useAuthContext from "../../contexts/AuthContext";
export default function Footer(){
    const {goToBookMark,goToHome,goToExplore,BiLogOut,BiBookBookmark,MdOutlineExplore,AiOutlineHome} = useIconContext();
    const {logOutHandler} = useAuthContext();

    return(<div className="footer">
        <AiOutlineHome size= "1.8em" onClick={goToHome} />
        <MdOutlineExplore size= "1.8em" onClick={goToExplore}/>
        <BiBookBookmark size= "1.8em" onClick={goToBookMark}/>
        <BiLogOut size= "1.8em" onClick={logOutHandler}/>
    </div>)
}