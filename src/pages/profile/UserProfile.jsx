import FetchData from "../../components/FetchData";
import Footer from "../../components/Footer/Footer";
import useAuthContext from "../../contexts/AuthContext";
import useFollowContext from "../../contexts/FollowContext";
import useUserFeedContext from "../../contexts/UserFeedContext";
import {BiArrowBack} from "react-icons/bi"

export default function UserProfile(){
    const {userFeed,userFeedDispacher,navigate} = useUserFeedContext()
    const {infinityUsers,followUser} = useFollowContext()
    const {user} = useAuthContext()
    const goToHome =()=>{
        userFeedDispacher({type:"ALL_POSTS",payload :{data:userFeed.postsData, value: "postsData" }})
        navigate("/")
    }
    return(<div>
             <h3><BiArrowBack size="1.7em" onClick={goToHome}/>User Profile Page</h3>
{   
    userFeed?.userProfileData?.map((details)=>{
        const {following,followers,username,profileIcon,lastName,firstName,_id} = details;
        return(<div key={_id}>
            <span className="profile-circle" >
            <img src={`${profileIcon}`} width="100%" height="100%"/></span>
            <div className="fullName">
                <span>{`${firstName} ${lastName}`}</span>
                <span style={{color:"grey"}}>@{username}</span>
                <span>Following: {following.length}</span>
                <span>Followers: {followers.length}</span>
                {user.name === username ? null : 
                infinityUsers?.followDetailsOfLoggedInUser.find((item)=>item.username ===username) ? <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
            }
            </div>
            <FetchData /> 
            <Footer />
        </div>)
    })

}
    </div>)
}