import FetchData from "../../components/FetchData";
import {BiArrowBack} from "react-icons/bi"
import useUserFeedContext from "../../contexts/UserFeedContext";

export default function SinglePostView(){
    
    const {userFeed,userFeedDispacher,navigate} = useUserFeedContext()
    const goToHome =()=>{
        userFeedDispacher({type:"ALL_POSTS",payload :{data:userFeed.postsData, value: "postsData" }})
        navigate("/")
    }
    return( <div>
        <BiArrowBack size="1.7em" onClick={goToHome}/>
       <FetchData />
    </div>)
}