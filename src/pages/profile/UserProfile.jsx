import FetchData from "../../components/FetchData";
import Footer from "../../components/Footer/Footer";
import useAuthContext from "../../contexts/AuthContext";
import useFollowContext from "../../contexts/FollowContext";
import useUserFeedContext from "../../contexts/UserFeedContext";
import {BiArrowBack} from "react-icons/bi"
import "./UserProfile.css"
import { useUserProfileContext } from "../../contexts/UserProfileContext";

export default function UserProfile(){
    const {userFeed,userFeedDispacher,navigate} = useUserFeedContext();
    const {infinityUsers,followUser} = useFollowContext();
    const {profile,editUserProfile,profileDispacher}= useUserProfileContext();
    console.log("🚀 ~ file: UserProfile.jsx:14 ~ UserProfile ~ profile:", profile)
    const {user} = useAuthContext()
    const goToHome =()=>{
        userFeedDispacher({type:"ALL_POSTS",payload :{data:userFeed.postsData, value: "postsData" }})
        navigate("/")
    }
    return(<div>
             <h3><BiArrowBack size="1.7em" onClick={goToHome}/>User Profile Page</h3>
{   
    profile?.userProfileData?.map((details)=>{
        const {following,followers,username,profileIcon,lastName,firstName,_id,bio,portfolio} = details;
        return(<div key={_id}>
            <span className="profile-circle" >
            <img src={`${profileIcon}`} width="100%" height="100%"/></span>
            <div className="fullName">
                <span>{`${firstName} ${lastName}`}</span>
                <span style={{color:"grey"}}>@{username}</span>
                <span>{bio === "" ? `Hey there, ${firstName} ${lastName}`: bio}</span>
                <span>{portfolio === "" ? `https://github.com/${firstName}${lastName}`: portfolio}</span>
                <span>Following: {following.length}</span>
                <span>Followers: {followers.length}</span>
                {user.name === username ? 
                    <button onClick={()=>profileDispacher({type:"EDIT_PROFILE",payload: profile.isEditProfile})}>Edit</button> : null 
                }
                {profile.isEditProfile ? 
                    <div className="edit-profile b">
                        <input type="text" placeholder="Enter your bio" onChange={(e)=>profileDispacher({type:"BIO_VALUE",payload:e.target.value})} />
                        <input type="text" placeholder="Enter your portfolio URL" onChange={(e)=>profileDispacher({type:"PORTFOLIO_VALUE",payload:e.target.value})}/>
                        <img className="selectAvtar" src="https://shorturl.at/ctGQZ" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/dkyER" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/hpsuR" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/bpvC9" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/jpX57" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/qENP1" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <img className="selectAvtar" src="https://shorturl.at/hjGK4" onClick={(e)=>profileDispacher({type:"AVTAR_VALUE",payload:e.target.src})}/>
                        <button onClick={editUserProfile}>Save</button>
                        <button onClick={()=>profileDispacher({type:"EDIT_PROFILE",payload: profile.isEditProfile})}>Cancel</button>
                    </div> :null
                }
                {user.name === username ? null : 
                infinityUsers?.followDetailsOfLoggedInUser.find((item)=>item.username ===username) ? 
                    <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : 
                    <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
                }
            </div>
            <FetchData /> 
            <Footer />
        </div>)
    })

}
    </div>)
}