import FetchData from "../../components/FetchData/FetchData";
import {BiArrowBack} from "react-icons/bi"
import useUserFeedContext from "../../contexts/UserFeedContext";
import Footer from "../../components/Footer/Footer";

export default function SinglePostView(){
    
    const {userFeed,userFeedDispacher,navigate} = useUserFeedContext()
    const goToHome =()=>{
        userFeedDispacher({type:"ALL_POSTS",payload :{data:userFeed.postsData, value: "postsData" }})
        navigate("/")
    }
    return( <div>
        <BiArrowBack size="1.8em" className="m-1" onClick={goToHome}/>
       <FetchData />
       <Footer />
    </div>)
}