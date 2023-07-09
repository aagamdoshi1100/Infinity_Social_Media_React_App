import "./Footer.css"
import { useIconContext } from "../../contexts/IconContext"
import useAuthContext from "../../contexts/AuthContext";
export default function Footer(){
    const {goToBookMark,goToHome,goToExplore,BiLogOut,BiBookBookmark,MdOutlineExplore,AiOutlineHome} = useIconContext();
    const {logOutHandler} = useAuthContext();

    return(<div className="footer">
        <div className="icon-details">
            <AiOutlineHome size= "1.8em" onClick={goToHome} />
            <span className="icon-name">Home</span>
        </div>

        <div className="icon-details">
            <MdOutlineExplore size= "1.8em" onClick={goToExplore}/>
            <span className="icon-name">Explore</span>
        </div>

        <div className="icon-details">
            <BiBookBookmark size= "1.8em" onClick={goToBookMark}/>
            <span className="icon-name">Bookmark</span>
        </div>

        <div className="icon-details">
            <BiLogOut size= "1.8em" onClick={logOutHandler}/>
            <span className="icon-name">Log out</span>
        </div> 
    </div>)
}