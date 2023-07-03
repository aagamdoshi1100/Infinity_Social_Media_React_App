import FetchData from "../../components/FetchData/FetchData";
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";
import Comment from "../../components/Comment/Comment";
import "./SinglePostView.css"

export default function SinglePostView(){
    const {goToHome,BiArrowBack} = useIconContext();

    return( <div>
        <div className="selected-post-header"><BiArrowBack size="1.7em" onClick={goToHome}/><h2>View Post</h2></div>
        <div className="post-view-container">
       <FetchData style={{marginBottom:"0px"}}/>
       
       </div>
       <div style={{marginTop:"0px",marginBottom:"80px"}}>
       <Comment  />
       </div>
       <Footer />
    </div>)
}

